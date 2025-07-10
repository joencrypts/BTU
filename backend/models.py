from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

class LeadCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    message: Optional[str] = None
    ip_address: Optional[str] = None
    location: Optional[str] = None

class LeadResponse(BaseModel):
    id: int
    name: str
    email: str
    phone: Optional[str] = None
    message: Optional[str] = None
    ip_address: Optional[str] = None
    location: Optional[str] = None
    submitted_at: datetime

    class Config:
        from_attributes = True

class AdminLogin(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class DeleteMultipleRequest(BaseModel):
    ids: List[int]

class DeleteByDateRequest(BaseModel):
    start_date: datetime
    end_date: datetime 