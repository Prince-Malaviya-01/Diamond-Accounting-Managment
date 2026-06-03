import calendar
from datetime import datetime
from pathlib import Path

import pandas as pd
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from sqlalchemy import extract, func
from sqlalchemy.orm import Session

from app.models.invoice import Invoice
from app.models.job import Job, JobStatus
from app.models.user import User
from app.utils.time import get_ist_now_naive


def generate_monthly_summary(db: Session, year: int, month: int) -> list[dict]:
    """Helper to get aggregate stats per user for a specific month."""
    from app.services.pricing_service import get_price_for_weight
    
    # 1. Get all completed jobs for this month
    jobs = (
        db.query(Job)
        .filter(
            Job.status == JobStatus.completed,
            extract("year", Job.completed_at) == year,
            extract("month", Job.completed_at) == month,
        )
        .all()
    )

    # 2. Group by user
    user_stats = {}
    for j in jobs:
        uid = j.user_id
        if uid not in user_stats:
            user = db.query(User).filter(User.id == uid).first()
            user_stats[uid] = {
                "user_id": uid,
                "username": user.username if user else "Unknown",
                "company_name": user.company_name if user else "Unknown",
                "default_rate": float(user.rate_per_carat) if user else 0.0,
                "total_stones": 0,
                "total_weight": 0.0,
                "total_amount": 0.0,
            }
        
        stat = user_stats[uid]
        stat["total_stones"] += 1
        w_val = float(j.weight)
        stat["total_weight"] += w_val
        
        # Calculate amount using the stored rate or falling back to current user rate
        rate = j.rate_per_carat if j.rate_per_carat is not None else get_price_for_weight(db, w_val, stat["default_rate"], at_time=j.created_at, user_id=uid)
        stat["total_amount"] += w_val * float(rate)

    # 3. Final formatting
    results = []
    for uid, s in user_stats.items():
        s["total_weight"] = round(s["total_weight"], 2)
        s["total_amount"] = round(s["total_amount"], 2)
        s["month"] = f"{year:04d}-{month:02d}"
        # Avg rate for summary purposes
        s["rate_per_carat"] = round(s["total_amount"] / s["total_weight"], 2) if s["total_weight"] > 0 else 0.0
        results.append(s)
    
    return sorted(results, key=lambda x: x["total_amount"], reverse=True)


def create_invoice_excel(output_path: Path, data: dict, stones: list[dict] | None = None, db: Session | None = None) -> None:
    """Generate a professional invoice Excel with a single stone-wise breakdown table."""
    import pandas as pd
    
    # 1. Summary Data
    summary_data = [
        ["Company Name", data.get("company_name", "")],
        ["Report Type", data.get("report_meta", "Stone Report")],
        ["Period", data.get("period_meta", data.get("month", ""))],
        ["Total Stones", data.get("total_stones", 0)],
        ["Total Weight (ct)", data.get("total_weight", 0.0)],
        ["Total Amount", f"Rs. {float(data.get('total_amount', 0.0)):.2f}"],
        ["Generated Date", get_ist_now_naive().strftime('%d/%m/%Y')]
    ]
    df_summary = pd.DataFrame(summary_data, columns=["Field", "Value"])

    # 2. Stones Detail
    if stones:
        stones_data = []
        for i, s in enumerate(stones, 1):
            completed_at = s.get("completed_at", "-")
            if hasattr(completed_at, "strftime"):
                completed_at = completed_at.strftime('%d/%m/%Y')
            
            stones_data.append({
                "#": i,
                "Stone ID": s.get("stone_id", ""),
                "Date": completed_at,
                "Weight": s.get("weight", 0.0),
                "Rate": f"Rs. {float(s.get('rate_per_carat', 0.0)):.2f}",
                "Amount": f"Rs. {float(s.get('amount', 0.0)):.2f}"
            })
        
        # Total Summary Row at the end of table
        stones_data.append({
            "#": "",
            "Stone ID": "TOTAL SUMMARY",
            "Date": "",
            "Weight": round(data.get("total_weight", 0.0), 2),
            "Rate": "",
            "Amount": f"Rs. {float(data.get('total_amount', 0.0)):.2f}"
        })
        df_stones = pd.DataFrame(stones_data)
    else:
        df_stones = pd.DataFrame(columns=["#", "Stone ID", "Date", "Weight", "Rate", "Amount"])

    # Write to Excel
    with pd.ExcelWriter(output_path, engine='openpyxl') as writer:
        df_summary.to_excel(writer, sheet_name='Invoice Report', index=False, startrow=0)
        
        start_row_stones = len(df_summary) + 3
        pd.DataFrame([["Stone Details"]]).to_excel(writer, sheet_name='Invoice Report', index=False, header=False, startrow=start_row_stones - 1)
        df_stones.to_excel(writer, sheet_name='Invoice Report', index=False, startrow=start_row_stones)
        
        # Adjust column widths, center alignment, and bold totals
        from openpyxl.styles import Alignment, Font
        worksheet = writer.sheets['Invoice Report']
        for row in worksheet.iter_rows():
            is_total = False
            for cell in row:
                cell.alignment = Alignment(horizontal='center', vertical='center')
                if cell.value == "TOTAL SUMMARY":
                    is_total = True
            
            if is_total:
                for cell in row:
                    cell.font = Font(bold=True)
        
        for col in worksheet.columns:
            max_length = 0
            column = col[0].column_letter
            for cell in col:
                try:
                    if len(str(cell.value)) > max_length:
                        max_length = len(str(cell.value))
                except: pass
            worksheet.column_dimensions[column].width = max_length + 5
        
        # Protect
        worksheet.protection.sheet = True
        worksheet.protection.password = 'diamond'


def create_invoice_pdf(output_path: Path, data: dict, stones: list[dict] | None = None, db: Session | None = None) -> None:
    """Generate a professional invoice PDF with a single stone-wise breakdown table."""
    w, h = A4
    c = canvas.Canvas(str(output_path), pagesize=A4)
    margin = 40
    right = w - margin

    # ── Header band ──
    c.setFillColor(colors.HexColor("#6C3FE3"))
    c.rect(0, h - 80, w, 80, fill=True, stroke=False)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 22)
    c.drawString(margin, h - 50, "◆ Diamond Processing")
    c.setFont("Helvetica", 10)
    c.drawString(margin, h - 68, "Job Work Invoice")

    # Invoice number / date on right
    month_parts = data.get("month", "2026-05").split("-")
    month_name = calendar.month_name[int(month_parts[1])]
    c.setFont("Helvetica-Bold", 12)
    c.drawRightString(right, h - 40, "Invoice")
    c.setFont("Helvetica", 9)
    c.drawRightString(right, h - 55, f"Period: {month_name} {month_parts[0]}")
    c.drawRightString(right, h - 68, f"Date: {get_ist_now_naive().strftime('%d/%m/%Y')}")

    y = h - 110

    # ── Bill To section ──
    c.setFillColor(colors.HexColor("#333333"))
    c.setFont("Helvetica-Bold", 10)
    c.drawString(margin, y, "Bill To:")
    c.setFont("Helvetica", 10)
    c.drawString(margin + 45, y, str(data.get("company_name", "")))
    y -= 18
    c.setFont("Helvetica-Bold", 9)
    c.drawString(margin, y, f"Report Type: {data.get('report_meta', 'Full Report')}")
    c.drawString(margin + 250, y, f"Period Detail: {data.get('period_meta', data.get('month', ''))}")
    y -= 15
    c.setStrokeColor(colors.HexColor("#E2E8F0"))
    c.line(margin, y, right, y)
    y -= 25

    # ── Summary box ──
    c.setFillColor(colors.HexColor("#F9F8FF"))
    c.roundRect(margin, y - 65, right - margin, 65, 6, fill=True, stroke=False)
    
    box_y = y - 20
    col_w = (right - margin) / 4
    eff_rate = data["total_amount"] / data["total_weight"] if data["total_weight"] > 0 else 0
    labels = ["Total Stones", "Total Weight", "Avg Rate", "Total Amount"]
    values = [
        str(data["total_stones"]),
        f"{data['total_weight']:.2f} ct",
        f"Rs. {eff_rate:.2f}",
        f"Rs. {data['total_amount']:.2f}",
    ]
    for i, (label, val) in enumerate(zip(labels, values)):
        x = margin + i * col_w + 15
        c.setFont("Helvetica", 8)
        c.setFillColor(colors.HexColor("#777777"))
        c.drawString(x, box_y, label)
        c.setFont("Helvetica-Bold", 12)
        c.setFillColor(colors.HexColor("#6C3FE3"))
        c.drawString(x, box_y - 18, val)

    y -= 100
    
    # ── Excel-style range-wise breakdown summary table ──
    def is_weight_in_range(weight: float, range_str: str) -> bool:
        import re
        wr = range_str.upper()
        try:
            if "TO" in wr:
                parts = wr.split("TO")
                v1 = float(re.sub(r"[^0-9.]", "", parts[0]))
                v2 = float(re.sub(r"[^0-9.]", "", parts[1]))
                return v1 <= round(weight, 2) <= v2
            elif "UP" in wr:
                v = float(re.sub(r"[^0-9.]", "", wr.replace("UP", "")))
                return round(weight, 2) >= v
        except:
            pass
        return False

    from app.models.price_config import PriceConfig
    user_id = data.get("user_id")
    configs = []
    if db and user_id:
        configs = db.query(PriceConfig).filter(PriceConfig.user_id == user_id, PriceConfig.valid_to == None).order_by(PriceConfig.sort_order).all()
        if not configs:
            configs = db.query(PriceConfig).filter(PriceConfig.user_id == None, PriceConfig.valid_to == None).order_by(PriceConfig.sort_order).all()

    if configs:
        cols = [margin + 5, margin + 180, margin + 260, margin + 360, right - 5]
        
        c.setFont("Helvetica-Bold", 10)
        c.setFillColor(colors.HexColor("#333333"))
        c.drawString(cols[0], y, "Range")
        c.drawRightString(cols[1] + 20, y, "Pcs")
        c.drawRightString(cols[2] + 30, y, "Carat")
        c.drawRightString(cols[3] + 20, y, "Rate")
        c.drawRightString(cols[4], y, "Total Rs")
        y -= 15
        
        c.setStrokeColor(colors.HexColor("#EEEEEE"))
        c.setLineWidth(0.5)
        c.line(margin, y+10, right, y+10)

        # Calculate matching summary details for each range
        summaries = []
        grand_pcs = 0
        grand_carat = 0.0
        grand_amount = 0.0
        
        for cfg in configs:
            matching_stones = [s for s in (stones or []) if is_weight_in_range(float(s.get("weight", 0.0)), cfg.weight_range)]
            pcs = len(matching_stones)
            carat = sum(float(s.get("weight", 0.0)) for s in matching_stones)
            rate = float(cfg.price_per_carat)
            amount = carat * rate
            
            summaries.append({
                "range": cfg.weight_range,
                "pcs": pcs,
                "carat": carat,
                "rate": rate,
                "amount": amount
            })
            grand_pcs += pcs
            grand_carat += carat
            grand_amount += amount

        # Draw range rows
        c.setFont("Helvetica", 9)
        c.setFillColor(colors.HexColor("#444444"))
        for s in summaries:
            if y < 80:
                c.showPage()
                y = h - 50
                # Redraw headers
                c.setFont("Helvetica-Bold", 10)
                c.setFillColor(colors.HexColor("#333333"))
                c.drawString(cols[0], y, "Range")
                c.drawRightString(cols[1] + 20, y, "Pcs")
                c.drawRightString(cols[2] + 30, y, "Carat")
                c.drawRightString(cols[3] + 20, y, "Rate")
                c.drawRightString(cols[4], y, "Total Rs")
                y -= 20
                c.setFont("Helvetica", 9)
                c.setFillColor(colors.HexColor("#444444"))

            c.drawString(cols[0], y, s["range"])
            c.drawRightString(cols[1] + 20, y, str(s["pcs"]))
            c.drawRightString(cols[2] + 30, y, f"{s['carat']:.2f}")
            c.drawRightString(cols[3] + 20, y, f"Rs. {s['rate']:.2f}")
            c.drawRightString(cols[4], y, f"Rs. {s['amount']:.2f}")
            y -= 18

        # Draw Grand Total Row
        if y < 100:
            c.showPage()
            y = h - 50
        
        y -= 10
        c.setStrokeColor(colors.HexColor("#6C3FE3"))
        c.setLineWidth(1.5)
        c.line(margin, y, right, y)
        y -= 25
        
        c.setFillColor(colors.HexColor("#6C3FE3"))
        c.setFont("Helvetica-Bold", 12)
        c.drawString(cols[0], y, "TOTAL")
        c.drawRightString(cols[1] + 20, y, str(grand_pcs))
        c.drawRightString(cols[2] + 30, y, f"{grand_carat:.2f} ct")
        c.drawRightString(cols[4], y, f"Rs. {grand_amount:.2f}")
    
    elif stones:
        cols = [margin + 5, margin + 35, margin + 145, margin + 250, margin + 340, margin + 430]
        c.setFont("Helvetica-Bold", 10)
        c.setFillColor(colors.HexColor("#333333"))
        c.drawString(cols[0], y, "#")
        c.drawString(cols[1], y, "Stone ID")
        c.drawString(cols[2], y, "Date")
        c.drawString(cols[3], y, "Weight")
        c.drawString(cols[4], y, "Rate")
        c.drawString(cols[5], y, "Amount")
        y -= 15
        
        c.setStrokeColor(colors.HexColor("#EEEEEE"))
        c.setLineWidth(0.5)
        c.line(margin, y+10, right, y+10)

        c.setFont("Helvetica", 9)
        c.setFillColor(colors.HexColor("#444444"))
        
        for i, s in enumerate(stones, 1):
            if y < 80:
                c.showPage()
                y = h - 50
                # Redraw headers on new page
                c.setFont("Helvetica-Bold", 10)
                c.drawString(cols[0], y, "#")
                c.drawString(cols[1], y, "Stone ID")
                c.drawString(cols[2], y, "Date")
                c.drawString(cols[3], y, "Weight")
                c.drawString(cols[4], y, "Rate")
                c.drawString(cols[5], y, "Amount")
                y -= 20
                c.setFont("Helvetica", 9)

            completed_at = s.get("completed_at", "-")
            # If it's already a string, keep it. If it's a datetime object, format it.
            if hasattr(completed_at, "strftime"):
                completed_at = completed_at.strftime('%d/%m/%Y')
            
            c.drawString(cols[0], y, str(i))
            c.drawString(cols[1], y, s.get("stone_id", ""))
            c.drawString(cols[2], y, str(completed_at))
            c.drawString(cols[3], y, f"{s.get('weight', 0.0):.2f}")
            c.drawString(cols[4], y, f"Rs. {float(s.get('rate_per_carat', 0.0)):.2f}")
            c.drawString(cols[5], y, f"Rs. {float(s.get('amount', 0.0)):.2f}")
            y -= 18

        # Final Total Summary
        if y < 100:
            c.showPage()
            y = h - 50
        
        y -= 10
        c.setStrokeColor(colors.HexColor("#6C3FE3"))
        c.setLineWidth(1.5)
        c.line(margin, y, right, y)
        y -= 25
        
        c.setFillColor(colors.HexColor("#6C3FE3"))
        c.setFont("Helvetica-Bold", 12)
        c.drawString(cols[1], y, "FINAL TOTAL SUMMARY")
        c.drawString(cols[3], y, f"{data['total_weight']:.2f} ct")
        c.drawRightString(right - 5, y, f"Rs. {data['total_amount']:.2f}")

    # Footer
    c.setFont("Helvetica", 8)
    c.setFillColor(colors.HexColor("#999999"))
    c.drawCentredString(w / 2, 30, "Page 1 - Diamond Processing Management System")
    c.save()


def group_stones(db: Session, stones: list[dict], user_id: int | None = None) -> list[tuple[str, list[dict]]]:
    """Group stones by their assigned weight ranges from PriceConfig."""
    from app.models.price_config import PriceConfig
    import re
    
    # 1. Get all relevant configs (user specific or global)
    configs = db.query(PriceConfig).filter(PriceConfig.user_id == user_id, PriceConfig.valid_to == None).order_by(PriceConfig.sort_order).all()
    if not configs:
        configs = db.query(PriceConfig).filter(PriceConfig.user_id == None, PriceConfig.valid_to == None).order_by(PriceConfig.sort_order).all()
    
    groups = []
    for cfg in configs:
        groups.append((cfg.weight_range, []))
    
    # Add an "Other" group for stones that don't fit any range
    groups.append(("Others", []))
    
    for s in stones:
        weight = round(float(s.get("weight", 0.0)), 2)
        found = False
        for i, cfg in enumerate(configs):
            wr = cfg.weight_range.upper()
            try:
                if "TO" in wr:
                    parts = wr.split("TO")
                    v1 = float(re.sub(r"[^0-9.]", "", parts[0]))
                    v2 = float(re.sub(r"[^0-9.]", "", parts[1]))
                    if v1 <= weight <= v2:
                        groups[i][1].append(s)
                        found = True
                        break
                elif "UP" in wr:
                    v = float(re.sub(r"[^0-9.]", "", wr.replace("UP", "")))
                    if weight >= v:
                        groups[i][1].append(s)
                        found = True
                        break
            except: continue
        
        if not found:
            groups[-1][1].append(s)
            
    # Filter out empty groups
    return [(name, items) for name, items in groups if items]


def create_custom_report(
    db: Session,
    user: User,
    output_path: Path,
    report_format: str, # "PDF" or "EXCEL"
    report_type: str,   # "FULL", "CARAT", or "RANGE:<id>"
    filter_type: str,   # "MONTH", "DAYS", "RANGE"
    filter_dates: list[str] | None = None, # For DAYS or RANGE (start, end)
    month_str: str | None = None # For MONTH (YYYY-MM)
) -> dict:
    """Advanced report generator with dynamic filtering and grouping."""
    from app.models.price_config import PriceConfig
    from app.services.pricing_service import get_price_for_weight
    import re

    # 1. Base Query
    query = db.query(Job).filter(Job.user_id == user.id, Job.status == JobStatus.completed)
    
    # 2. Date Filtering
    if filter_type == "MONTH" and month_str:
        y, m = map(int, month_str.split("-"))
        query = query.filter(extract("year", Job.completed_at) == y, extract("month", Job.completed_at) == m)
    elif filter_type == "DAYS" and filter_dates:
        parsed_dates = []
        for d in filter_dates:
            try: parsed_dates.append(datetime.strptime(d, "%Y-%m-%d").date())
            except: continue
        if parsed_dates:
            query = query.filter(func.date(Job.completed_at).in_(parsed_dates))
    elif filter_type == "RANGE" and filter_dates and len(filter_dates) >= 2:
        try:
            d1 = datetime.strptime(filter_dates[0], "%Y-%m-%d")
            d2 = datetime.strptime(filter_dates[1], "%Y-%m-%d").replace(hour=23, minute=59, second=59)
            query = query.filter(Job.completed_at >= d1, Job.completed_at <= d2)
        except: pass

    jobs = query.order_by(Job.completed_at.asc(), Job.id.asc()).all()
    
    # 3. Weight Range Filtering (if specific range selected)
    target_range = None
    if report_type.startswith("RANGE:"):
        range_id = int(report_type.split(":")[1])
        target_range = db.query(PriceConfig).filter(PriceConfig.id == range_id).first()
    
    stones = []
    total_w = 0.0
    total_a = 0.0
    
    for j in jobs:
        w = float(j.weight)
        
        # If target range, filter here
        if target_range:
            wr = target_range.weight_range.upper()
            match = False
            try:
                if "TO" in wr:
                    parts = wr.split("TO")
                    v1 = float(re.sub(r"[^0-9.]", "", parts[0]))
                    v2 = float(re.sub(r"[^0-9.]", "", parts[1]))
                    if v1 <= round(w, 2) <= v2: match = True
                elif "UP" in wr:
                    v = float(re.sub(r"[^0-9.]", "", wr.replace("UP", "")))
                    if round(w, 2) >= v: match = True
            except: pass
            if not match: continue

        rate = j.rate_per_carat if j.rate_per_carat is not None else get_price_for_weight(db, w, float(user.rate_per_carat), at_time=j.created_at, user_id=user.id)
        amt = w * float(rate)
        
        stones.append({
            "stone_id": j.stone_id,
            "weight": w,
            "completed_at": j.completed_at,
            "rate_per_carat": float(rate),
            "amount": amt
        })
        total_w += w
        total_a += amt

    # 3.5 Meta Info for Locked Header
    if report_format == "PDF":
        report_meta = "Summary Report"
    else:
        report_meta = "Full Stone Report"
        if report_type == "CARAT": report_meta = "Carat Wise Summary Report"
        elif target_range: report_meta = f"Weight Range: {target_range.weight_range}"
    
    period_meta = f"{month_str}" if filter_type == "MONTH" else f"{filter_type}"
    if filter_type == "DAYS" and filter_dates:
        period_meta = f"Dates: {', '.join(filter_dates)}"
    elif filter_type == "RANGE" and filter_dates:
        period_meta = f"Range: {filter_dates[0]} to {filter_dates[1]}"

    # 4. Generate Output
    summary = {
        "company_name": user.company_name,
        "month": month_str or "Custom Period",
        "total_stones": len(stones),
        "total_weight": round(total_w, 2),
        "total_amount": round(total_a, 2),
        "user_id": user.id,
        "report_meta": report_meta,
        "period_meta": period_meta
    }

    if report_format == "EXCEL":
        if report_type == "CARAT":
            _create_grouped_excel(output_path, summary, stones, db)
        else:
            create_invoice_excel(output_path, summary, stones, db)
    else:
        if report_type == "CARAT":
            _create_grouped_pdf(output_path, summary, stones, db)
        else:
            create_invoice_pdf(output_path, summary, stones, db)

    return summary


def _create_grouped_excel(output_path: Path, data: dict, stones: list[dict], db: Session) -> None:
    """Helper for Carat Vise Excel."""
    import pandas as pd
    from openpyxl.styles import Alignment, Font
    
    summary_data = [
        ["Company Name", data.get("company_name", "")],
        ["Report Type", data.get("report_meta", "Carat Wise Report")],
        ["Period", data.get("period_meta", data.get("month", ""))],
        ["Total Stones", data.get("total_stones", 0)],
        ["Total Weight", data.get("total_weight", 0.0)],
        ["Total Amount", f"Rs. {float(data.get('total_amount', 0.0)):.2f}"]
    ]
    df_summary = pd.DataFrame(summary_data, columns=["Field", "Value"])

    with pd.ExcelWriter(output_path, engine='openpyxl') as writer:
        df_summary.to_excel(writer, sheet_name='Invoice', index=False)
        curr_row = len(df_summary) + 3
        
        groups = group_stones(db, stones, data.get("user_id"))
        idx = 1
        for name, g_stones in groups:
            pd.DataFrame([[f"WEIGHT RANGE: {name}"]]).to_excel(writer, sheet_name='Invoice', index=False, header=False, startrow=curr_row)
            curr_row += 1
            
            rows = []
            sub_w = 0.0
            sub_a = 0.0
            for s in g_stones:
                dt = s["completed_at"].strftime('%d/%m/%Y') if hasattr(s["completed_at"], "strftime") else str(s["completed_at"])
                rows.append({
                    "#": idx, "Stone ID": s["stone_id"], "Date": dt,
                    "Weight": s["weight"], "Rate": s["rate_per_carat"], "Amount": s["amount"]
                })
                sub_w += s["weight"]
                sub_a += s["amount"]
                idx += 1
            
            rows.append({"#": "", "Stone ID": f"SUBTOTAL ({name})", "Date": "", "Weight": round(sub_w, 2), "Rate": "", "Amount": round(sub_a, 2)})
            
            df_g = pd.DataFrame(rows)
            df_g.to_excel(writer, sheet_name='Invoice', index=False, startrow=curr_row)
            curr_row += len(df_g) + 2

        # Final Total Summary
        pd.DataFrame([["", "TOTAL SUMMARY", "", data["total_weight"], "", data["total_amount"]]]).to_excel(
            writer, sheet_name='Invoice', index=False, header=False, startrow=curr_row
        )

        # Style Bold & Center
        ws = writer.sheets['Invoice']
        for row in ws.iter_rows():
            is_bold = False
            for cell in row:
                cell.alignment = Alignment(horizontal='center')
                val = str(cell.value or "").upper()
                if "SUBTOTAL" in val or "TOTAL SUMMARY" in val or "WEIGHT RANGE:" in val:
                    is_bold = True
            if is_bold:
                for cell in row: cell.font = Font(bold=True)
        
        # Adjust Column Widths
        for col in ws.columns:
            max_length = 0
            column = col[0].column_letter
            for cell in col:
                try:
                    if len(str(cell.value)) > max_length:
                        max_length = len(str(cell.value))
                except: pass
            ws.column_dimensions[column].width = max_length + 5

        # Protect
        ws.protection.sheet = True
        ws.protection.password = 'diamond'


def _create_grouped_pdf(output_path: Path, data: dict, stones: list[dict], db: Session) -> None:
    """Helper for Carat Vise PDF with same professional design as main invoice."""
    w, h = A4
    c = canvas.Canvas(str(output_path), pagesize=A4)
    margin = 40
    right = w - margin
    
    # ── Header band (Copy from main) ──
    c.setFillColor(colors.HexColor("#6C3FE3"))
    c.rect(0, h - 80, w, 80, fill=True, stroke=False)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 22)
    c.drawString(margin, h - 50, "◆ Diamond Processing")
    c.setFont("Helvetica", 10)
    c.drawString(margin, h - 68, "Job Work Invoice")

    # Invoice number / date on right
    month_parts = data.get("month", "2026-05").split("-")
    month_name = calendar.month_name[int(month_parts[1])] if len(month_parts) > 1 else "Report"
    c.setFont("Helvetica-Bold", 12)
    c.drawRightString(right, h - 40, "Carat Wise Report")
    c.setFont("Helvetica", 9)
    c.drawRightString(right, h - 55, f"Period: {month_name} {month_parts[0]}")
    c.drawRightString(right, h - 68, f"Date: {get_ist_now_naive().strftime('%d/%m/%Y')}")

    y = h - 110

    # ── Bill To section ──
    c.setFillColor(colors.HexColor("#333333"))
    c.setFont("Helvetica-Bold", 10)
    c.drawString(margin, y, "Bill To:")
    c.setFont("Helvetica", 10)
    c.drawString(margin + 45, y, str(data.get("company_name", "")))
    y -= 18
    c.setFont("Helvetica-Bold", 9)
    c.drawString(margin, y, f"Report Type: {data.get('report_meta', 'Carat Wise Report')}")
    c.drawString(margin + 250, y, f"Period Detail: {data.get('period_meta', data.get('month', ''))}")
    y -= 15
    c.setStrokeColor(colors.HexColor("#E2E8F0"))
    c.line(margin, y, right, y)
    y -= 25

    # ── Summary box ──
    c.setFillColor(colors.HexColor("#F9F8FF"))
    c.roundRect(margin, y - 65, right - margin, 65, 6, fill=True, stroke=False)
    
    box_y = y - 20
    col_w = (right - margin) / 4
    eff_rate = data["total_amount"] / data["total_weight"] if data["total_weight"] > 0 else 0
    labels = ["Total Stones", "Total Weight", "Avg Rate", "Total Amount"]
    values = [
        str(data["total_stones"]),
        f"{data['total_weight']:.2f} ct",
        f"Rs. {eff_rate:.2f}",
        f"Rs. {data['total_amount']:.2f}",
    ]
    for i, (label, val) in enumerate(zip(labels, values)):
        x = margin + i * col_w + 15
        c.setFont("Helvetica", 8)
        c.setFillColor(colors.HexColor("#777777"))
        c.drawString(x, box_y, label)
        c.setFont("Helvetica-Bold", 12)
        c.setFillColor(colors.HexColor("#6C3FE3"))
        c.drawString(x, box_y - 18, val)

    y -= 100
    cols = [margin + 5, margin + 35, margin + 145, margin + 250, margin + 340, margin + 430]
    
    groups = group_stones(db, stones, data.get("user_id"))
    idx = 1
    for name, g_stones in groups:
        if y < 150:
            c.showPage()
            y = h - 50
        
        # Range title row
        c.setFillColor(colors.HexColor("#F1F5F9"))
        c.rect(margin, y-20, right-margin, 20, fill=1, stroke=0)
        c.setFillColor(colors.HexColor("#475569"))
        c.setFont("Helvetica-Bold", 10)
        c.drawString(margin+10, y-14, f"Weight Range: {name}")
        y -= 35
        
        # Headers
        c.setFillColor(colors.HexColor("#6C3FE3"))
        c.setFont("Helvetica-Bold", 9)
        headers = ["#", "Stone ID", "Date", "Weight", "Rate", "Amount"]
        for cx, hdr in zip(cols, headers): c.drawString(cx, y, hdr)
        y -= 15
        
        c.setStrokeColor(colors.HexColor("#EEEEEE"))
        c.setLineWidth(0.5)
        c.line(margin, y+10, right, y+10)

        c.setFont("Helvetica", 9)
        c.setFillColor(colors.HexColor("#444444"))
        
        sub_w = 0.0
        sub_a = 0.0
        for s in g_stones:
            if y < 50:
                c.showPage()
                y = h - 50
                # Redraw headers for range if new page
                c.setFont("Helvetica-Bold", 9)
                c.setFillColor(colors.HexColor("#6C3FE3"))
                for cx, hdr in zip(cols, headers): c.drawString(cx, y, hdr)
                y -= 20
                c.setFont("Helvetica", 9)
                c.setFillColor(colors.HexColor("#444444"))

            dt = s["completed_at"].strftime('%d/%m/%Y') if hasattr(s["completed_at"], "strftime") else str(s["completed_at"])
            c.drawString(cols[0], y, str(idx))
            c.drawString(cols[1], y, s["stone_id"])
            c.drawString(cols[2], y, dt)
            c.drawString(cols[3], y, f"{s['weight']:.2f}")
            c.drawString(cols[4], y, f"Rs. {float(s.get('rate_per_carat', 0.0)):.2f}")
            c.drawString(cols[5], y, f"Rs. {float(s.get('amount', 0.0)):.2f}")
            sub_w += s["weight"]
            sub_a += s["amount"]
            y -= 15
            idx += 1
        
        y -= 5
        c.setStrokeColor(colors.HexColor("#EEEEEE"))
        c.line(margin, y+10, right, y+10)
        c.setFont("Helvetica-Bold", 9)
        c.setFillColor(colors.HexColor("#6C3FE3"))
        c.drawString(cols[1], y, f"SUBTOTAL ({name})")
        c.drawString(cols[3], y, f"{sub_w:.2f} ct")
        c.drawRightString(right - 5, y, f"Rs. {sub_a:.2f}")
        y -= 30

    # Grand Total
    if y < 80:
        c.showPage()
        y = h - 50

    y -= 10
    c.setStrokeColor(colors.HexColor("#6C3FE3"))
    c.setLineWidth(1.5)
    c.line(margin, y, right, y)
    y -= 25
    
    c.setFillColor(colors.HexColor("#6C3FE3"))
    c.setFont("Helvetica-Bold", 12)
    c.drawString(cols[1], y, "FINAL TOTAL SUMMARY")
    c.drawString(cols[3], y, f"{data['total_weight']:.2f} ct")
    c.drawRightString(right - 5, y, f"Rs. {data['total_amount']:.2f}")

    # Footer
    c.setFont("Helvetica", 8)
    c.setFillColor(colors.HexColor("#999999"))
    c.drawCentredString(w / 2, 30, f"Page 1 - Diamond Processing Management System")
    c.save()


def upsert_invoice(db: Session, user: User, month: str, payload: dict, file_path: str) -> Invoice:
    invoice = db.query(Invoice).filter(Invoice.user_id == user.id, Invoice.month == month).first()
    if not invoice:
        invoice = Invoice(
            user_id=user.id,
            month=month,
            total_stones=payload["total_stones"],
            total_weight=payload["total_weight"],
            rate_per_carat=payload["rate_per_carat"],
            total_amount=payload["total_amount"],
            file_path=file_path,
        )
        db.add(invoice)
    else:
        invoice.total_stones = payload["total_stones"]
        invoice.total_weight = payload["total_weight"]
        invoice.rate_per_carat = payload["rate_per_carat"]
        invoice.total_amount = payload["total_amount"]
        invoice.file_path = file_path

    db.commit()
    db.refresh(invoice)
    return invoice


def sync_user_invoice_for_month(db: Session, user: User, year: int, month: int, output_path: Path, stones: list[dict] | None = None) -> Invoice | None:
    summaries = generate_monthly_summary(db, year, month)
    target = next((row for row in summaries if row["user_id"] == user.id), None)
    if not target:
        return None

    create_invoice_pdf(output_path, target, stones, db)
    return upsert_invoice(db, user, f"{year:04d}-{month:02d}", target, str(output_path))


def create_account_statement_pdf(output_path: Path, user: User, summary: dict, entries: list[dict]) -> None:
    """Generate a professional account statement PDF for a specific user."""
    w, h = A4
    c = canvas.Canvas(str(output_path), pagesize=A4)
    margin = 40
    right = w - margin

    # ── Header band (Consistent with Invoices) ──
    c.setFillColor(colors.HexColor("#6C3FE3"))
    c.rect(0, h - 80, w, 80, fill=True, stroke=False)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 22)
    c.drawString(margin, h - 50, "◆ Diamond Processing")
    c.setFont("Helvetica", 10)
    c.drawString(margin, h - 68, "Account Statement")

    # Date on right
    c.setFont("Helvetica-Bold", 12)
    c.drawRightString(right, h - 40, "Statement")
    c.setFont("Helvetica", 9)
    c.drawRightString(right, h - 55, f"Generated: {get_ist_now_naive().strftime('%d/%m/%Y %H:%M')}")

    y = h - 110

    # ── User Info section ──
    c.setFillColor(colors.HexColor("#333333"))
    c.setFont("Helvetica-Bold", 10)
    c.drawString(margin, y, "Client Name:")
    c.setFont("Helvetica", 10)
    c.drawString(margin + 65, y, f"{user.company_name} ({user.username})")
    y -= 15
    c.setStrokeColor(colors.HexColor("#E2E8F0"))
    c.line(margin, y, right, y)
    y -= 25

    # ── Account Summary box ──
    c.setFillColor(colors.HexColor("#F8FAFC"))
    c.roundRect(margin, y - 65, right - margin, 65, 6, fill=True, stroke=False)
    
    box_y = y - 20
    col_w = (right - margin) / 3
    
    # Using specific colors for stats
    # Revenue (Primary), Received (Success), Pending (Failed/Alert)
    stats = [
        ("Total Revenue", f"Rs. {float(summary['total_revenue']):.2f}", "#6C3FE3"),
        ("Total Received", f"Rs. {float(summary['received']):.2f}", "#10B981"),
        ("Pending Balance", f"Rs. {float(summary['pending']):.2f}", "#EF4444")
    ]

    for i, (label, val, color) in enumerate(stats):
        x = margin + i * col_w + 15
        c.setFont("Helvetica", 8)
        c.setFillColor(colors.HexColor("#64748B"))
        c.drawString(x, box_y, label)
        c.setFont("Helvetica-Bold", 11)
        c.setFillColor(colors.HexColor(color))
        c.drawString(x, box_y - 18, val)

    y -= 100
    
    # ── Payment History Table ──
    c.setFillColor(colors.HexColor("#1E293B"))
    c.setFont("Helvetica-Bold", 12)
    c.drawString(margin, y, "Payment History")
    y -= 20
    
    cols = [margin + 5, margin + 40, margin + 180, margin + 280]
    headers = ["#", "Amount", "Mode", "Date"]
    
    c.setFont("Helvetica-Bold", 10)
    c.setFillColor(colors.HexColor("#475569"))
    for cx, hdr in zip(cols, headers):
        c.drawString(cx, y, hdr)
    y -= 8
    
    c.setStrokeColor(colors.HexColor("#CBD5E1"))
    c.setLineWidth(1)
    c.line(margin, y, right, y)
    y -= 18

    c.setFont("Helvetica", 9)
    c.setFillColor(colors.HexColor("#334155"))
    
    for i, entry in enumerate(entries, 1):
        if y < 80:
            c.showPage()
            y = h - 50
            # Redraw headers
            c.setFont("Helvetica-Bold", 10)
            c.setFillColor(colors.HexColor("#475569"))
            for cx, hdr in zip(cols, headers): c.drawString(cx, y, hdr)
            y -= 15
            c.setFont("Helvetica", 9)
            c.setFillColor(colors.HexColor("#334155"))

        dt = entry["created_at"]
        if hasattr(dt, "strftime"):
            dt_str = dt.strftime('%d/%m/%Y %H:%M')
        else:
            # If it's a string from API/SQLAlchemy
            dt_str = str(dt)

        c.drawString(cols[0], y, str(i))
        c.setFont("Helvetica-Bold", 9)
        c.drawString(cols[1], y, f"Rs. {float(entry['amount']):.2f}")
        c.setFont("Helvetica", 9)
        c.drawString(cols[2], y, str(entry.get("payment_mode") or "Cash"))
        c.drawString(cols[3], y, dt_str)
        
        y -= 20
        c.setStrokeColor(colors.HexColor("#F1F5F9"))
        c.setLineWidth(0.5)
        c.line(margin, y+15, right, y+15)

    if not entries:
        c.setFont("Helvetica-Oblique", 10)
        c.setFillColor(colors.HexColor("#94A3B8"))
        c.drawCentredString(w/2, y - 20, "No payment records found.")

    # Footer
    c.setFont("Helvetica", 8)
    c.setFillColor(colors.HexColor("#94A3B8"))
    c.drawCentredString(w / 2, 30, "Generated by Diamond Processing System - Account Statement")
    
    c.save()
