from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from app.models.base import Base
from app.utils.time import get_ist_now_naive

class PriceConfig(Base):
    __tablename__ = "price_configs"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True) # NULL means global default
    weight_range = Column(String(100), nullable=False)
    price_per_carat = Column(String(50), nullable=False)
    sort_order = Column(Integer, default=0)
    
    # Historical tracking
    valid_from = Column(DateTime, default=get_ist_now_naive, nullable=False)
    valid_to = Column(DateTime, nullable=True)
    
    updated_at = Column(DateTime, default=get_ist_now_naive, onupdate=get_ist_now_naive)
