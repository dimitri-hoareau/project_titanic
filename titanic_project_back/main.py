
import os
import models
import schemas
import pandas as pd
from sqlalchemy.orm import Session
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from typing import List


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"], 
)

# for testing without docker
# engine = create_engine(f'postgresql://dimitri:dimitri@localhost/titanic')
engine = create_engine(f'postgresql://dimitri:dimitri@db:5432/titanic')
df = pd.read_csv('train.csv')

try:
    df.to_sql('passengers', con=engine, index=False, if_exists='fail')
    print("Data are successfully loaded in the database.")
except ValueError as e:
    print("Data are already loaded in the database.")


SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/passengers/", response_model=List[schemas.Passenger])
def read_passengers(skip: int = 0, db: Session = Depends(get_db)):
    passengers = db.query(models.Passenger).offset(skip)
    return passengers


