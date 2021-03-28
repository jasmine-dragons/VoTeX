from flask import Flask, request, jsonify
from saytex import Saytex as st
from flask_cors import CORS
app = Flask(__name__)

CORS(app)

@app.route('/', methods=['POST'])
def textToLaTeX():
    req = request.json
    print("------------------------")
    print(req)
    print("------------------------")
    res = st().to_latex(req['text'])
    return jsonify({"latex": res}), 200


if __name__ == "__main__":
    app.run()
