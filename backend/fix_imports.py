import os

backend_dir = os.path.dirname(os.path.abspath(__file__))
path = os.path.join(backend_dir, "app", "routers", "admin.py")
with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()

new_lines = []
found = False
for line in lines:
    if "from app.billing.service import sync_user_invoice_for_month" in line and "create_account_statement_pdf" not in line:
        new_lines.append("from app.billing.service import sync_user_invoice_for_month, create_account_statement_pdf\n")
        found = True
    else:
        new_lines.append(line)

if found:
    with open(path, "w", encoding="utf-8") as f:
        f.writelines(new_lines)
    print("Import updated successfully")
else:
    print("Import line not found or already updated")
