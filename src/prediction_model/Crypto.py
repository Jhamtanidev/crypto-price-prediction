from pydantic import BaseModel
# 2. Class which describes Bank Notes measurements
class Crypto(BaseModel):
    Timestamp: float 
    Open: float 
    High: float 
    Low: float  # Closing price of the day
    