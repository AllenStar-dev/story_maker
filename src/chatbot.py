import os
from transformers import pipeline
from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

PORT = os.environ.get('PORT', 5000)

@app.route('/getStory', methods=['POST'])
def chatbot_endpoint():
    prompt = request.json['user_prompt']

    story = generate_response(prompt)

    return jsonify({'response': story})

@app.route('/', methods=['GET'])
def getIndex():
    return render_template('index.html')

text_generator = pipeline("text-generation", model="distilgpt2")
def generate_response(user_input):
    generated_story = text_generator(user_input, max_length=200, num_return_sequences=1, truncation=True)[0]['generated_text']
    return generated_story
 

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=PORT, debug=True)
