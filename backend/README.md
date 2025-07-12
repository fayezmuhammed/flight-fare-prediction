# Instructions to run the Flask backend

1. Create and activate your Python virtual environment (if not already done):
   python3 -m venv .venv
   source .venv/bin/activate

2. Install dependencies:
   pip install -r requirements.txt

3. Run the backend server:
   python app.py

The backend will start at http://127.0.0.1:5000

Endpoints:
- GET / : Health check
- POST /api/predict : Prediction endpoint (implement logic in app.py)
