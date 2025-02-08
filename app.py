from transformers import pipeline

# Load a question-generation model
qg_pipeline = pipeline("text2text-generation", model="t5-base")

text = "The Eiffel Tower is a wrought-iron lattice tower in Paris, France. It was named after the engineer Gustave Eiffel."
questions = qg_pipeline(f"generate questions: {text}")

print(questions)