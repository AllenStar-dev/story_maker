FROM pytorch/pytorch:2.1.0-cuda11.8-cudnn8-runtime AS builder

WORKDIR /app

COPY . /app

RUN pip install Flask requests transformers

FROM builder AS runtime

WORKDIR /app

COPY --from=builder /app /app

CMD ["python", "/app/akash_app/chatbot.py"]
