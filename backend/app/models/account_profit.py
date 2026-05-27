from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from app.models.base import Base
from datetime import datetime
from sqlalchemy.orm import relationship

class AccountProfit(Base):
    __tablename__ = "account_profits"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    amount = Column(Float, nullable=False)
    payment_mode = Column(String, nullable=True) # Cash, UPI, Cheque
    remarks = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User")
