import re
from datetime import datetime
from sqlalchemy.orm import Session
from app.models.price_config import PriceConfig

def get_price_for_weight(db: Session, weight: float, default_rate: float, at_time: datetime | None = None, user_id: int | None = None) -> float:
    """
    Determines the price per carat based on weight ranges in PriceConfig.
    If at_time is provided, it finds the pricing that was active at that time.
    If user_id is provided, it prioritizes client-specific prices over global ones.
    """
    # 1. Try to find user-specific pricing first
    if user_id:
        query = db.query(PriceConfig).filter(PriceConfig.user_id == user_id)
        if at_time:
            from sqlalchemy import or_
            query = query.filter(
                PriceConfig.valid_from <= at_time,
                or_(PriceConfig.valid_to == None, PriceConfig.valid_to > at_time)
            )
        else:
            query = query.filter(PriceConfig.valid_to == None)
        
        configs = query.all()
        if configs:
            return _calculate_from_configs(configs, weight, default_rate)

    # 2. Fallback to global pricing (user_id is NULL)
    query = db.query(PriceConfig).filter(PriceConfig.user_id == None)
    if at_time:
        from sqlalchemy import or_
        query = query.filter(
            PriceConfig.valid_from <= at_time,
            or_(PriceConfig.valid_to == None, PriceConfig.valid_to > at_time)
        )
    else:
        query = query.filter(PriceConfig.valid_to == None)
        
    configs = query.all()
    return _calculate_from_configs(configs, weight, default_rate)

def _calculate_from_configs(configs: list[PriceConfig], weight: float, default_rate: float) -> float:
    # Round weight to 2 decimal places to match ranges (e.g., 2.495 -> 2.50)
    weight = round(weight, 2)
    if not configs:
        return default_rate
    
    # Sort configs to handle overlapping ranges if any (though unlikely)
    # We prioritize the most specific match
    
    for cfg in configs:
        weight_range_str = cfg.weight_range.upper().strip()
        try:
            # Case 1: "0.50 TO 0.99"
            if "TO" in weight_range_str:
                parts = weight_range_str.split("TO")
                # Remove any non-numeric chars except dot
                min_val = float(re.sub(r"[^0-9.]", "", parts[0].strip()))
                max_val = float(re.sub(r"[^0-9.]", "", parts[1].strip()))
                if min_val <= weight <= max_val:
                    return float(cfg.price_per_carat)
            
            # Case 2: "25CT UP" or "25.00 UP"
            elif "UP" in weight_range_str:
                min_val = float(re.sub(r"[^0-9.]", "", weight_range_str.replace("UP", "").strip()))
                if weight >= min_val:
                    return float(cfg.price_per_carat)
        except (ValueError, IndexError):
            continue
            
    return default_rate
