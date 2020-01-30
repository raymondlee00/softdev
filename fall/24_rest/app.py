from flask import Flask, render_template
from urllib.request import urlopen
import json
app = Flask(__name__)

@app.route("/")
def root():
    res = urlopen("https://api.nasa.gov/planetary/apod?api_key=g6WavdnBVuz9r16VC3IOg01nIUXw6yT5ZASGMHfN").read()

    data = json.loads( res )
    return render_template("index.html", pic = data['url'])

if __name__ == "__main__":
    app.debug = True
    app.run()