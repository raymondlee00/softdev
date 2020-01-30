from flask import Flask, render_template
from urllib.request import urlopen
import json

app = Flask(__name__)


@app.route("/")
def root():
    res = urlopen(
        "https://en.wikipedia.org/w/api.php?format=json&action=query&formatversion=2&prop=pageimages%7Cpageterms&titles=Tyler1"
    ).read()

    data = json.loads(res)
    return render_template("index.html", tylerData=data["query"]["pages"][0]["terms"]["alias"][0])


if __name__ == "__main__":
    app.debug = True
    app.run()

