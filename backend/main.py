from flask import Flask, request, jsonify
from saytex import Saytex as st
app = Flask(__name__)


@app.route('/', methods=['GET'])
def textToLaTeX():
    req = request.json
    res = st().to_latex(req['text'])
    return jsonify({"latex": res}), 200


if __name__ == "__main__":
    app.run()
