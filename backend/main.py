from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
import os
from dotenv import load_dotenv

from database import get_db, create_tables, Lead
from models import LeadCreate, LeadResponse, AdminLogin, Token, DeleteMultipleRequest, DeleteByDateRequest
from auth import create_access_token, verify_token, authenticate_admin, ACCESS_TOKEN_EXPIRE_MINUTES
from datetime import timedelta

load_dotenv()

app = FastAPI(title="Brand Top Up Admin API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("ALLOWED_ORIGINS", ["http://localhost:3000"]),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Security
security = HTTPBearer()

def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    username = verify_token(token)
    if username is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return username

@app.on_event("startup")
async def startup_event():
    create_tables()

@app.post("/login", response_model=Token)
async def login(admin_login: AdminLogin):
    if not authenticate_admin(admin_login.username, admin_login.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": admin_login.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/leads", response_model=LeadResponse)
async def create_lead(lead: LeadCreate, db: Session = Depends(get_db)):
    db_lead = Lead(**lead.dict())
    db.add(db_lead)
    db.commit()
    db.refresh(db_lead)
    return db_lead

@app.get("/leads", response_model=List[LeadResponse])
async def get_leads(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
    current_user: str = Depends(get_current_user)
):
    leads = db.query(Lead).offset(skip).limit(limit).all()
    return leads

@app.delete("/leads/{lead_id}")
async def delete_lead(
    lead_id: int,
    db: Session = Depends(get_db),
    current_user: str = Depends(get_current_user)
):
    lead = db.query(Lead).filter(Lead.id == lead_id).first()
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")
    
    db.delete(lead)
    db.commit()
    return {"message": "Lead deleted successfully"}

@app.post("/leads/delete-multiple")
async def delete_multiple_leads(
    request: DeleteMultipleRequest,
    db: Session = Depends(get_db),
    current_user: str = Depends(get_current_user)
):
    deleted_count = db.query(Lead).filter(Lead.id.in_(request.ids)).delete(synchronize_session=False)
    db.commit()
    return {"message": f"Deleted {deleted_count} leads successfully"}

@app.post("/leads/delete-by-date")
async def delete_leads_by_date(
    request: DeleteByDateRequest,
    db: Session = Depends(get_db),
    current_user: str = Depends(get_current_user)
):
    deleted_count = db.query(Lead).filter(
        Lead.submitted_at >= request.start_date,
        Lead.submitted_at <= request.end_date
    ).delete(synchronize_session=False)
    db.commit()
    return {"message": f"Deleted {deleted_count} leads successfully"}

@app.delete("/leads/clear-all")
async def clear_all_leads(
    db: Session = Depends(get_db),
    current_user: str = Depends(get_current_user)
):
    deleted_count = db.query(Lead).delete()
    db.commit()
    return {"message": f"Deleted all {deleted_count} leads successfully"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 