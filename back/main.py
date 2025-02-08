from transformers import pipeline
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

qg_pipeline = pipeline("text2text-generation", model="valhalla/t5-small-qg-hl")

class TextRequest(BaseModel):
    text: str
    num_questions: int = 10  # Default number of questions

@app.post("/generate-questions/")
async def generate_questions(request: TextRequest):
    questions = qg_pipeline(
        f"generate questions: {request.text}",
        num_return_sequences=request.num_questions,
        max_length=64,
        do_sample=True,
        temperature=0.9,
        top_k=50
    )
    return {"questions": [q["generated_text"] for q in questions]}