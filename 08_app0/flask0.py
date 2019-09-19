from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello_world():
        print(__name__)
        return "<!DOCTYPE html><head></head><body><h1>hello world!</h1><a href='http://127.0.0.1:5000/black'>BLACK!</a></body>"

@app.route("/black")
def black():
        print(__name__)
        return "<!DOCTYPE html><head></head><body><h1>you have reached black!</h1><a href='http://127.0.0.1:5000/hat'>Visit hat!</a></body>"

@app.route("/hat")
def hat():
        print(__name__)
        return "<!DOCTYPE html><head></head><body><h1>joe</h1><a href='http://127.0.0.1:5000/'>back to home!</a></body>"

if __name__  == "__main__":
        app.debug = True
        app.run()