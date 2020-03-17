# Team RM* -- ray. lee. and Michael Zhang
# Softdev pd9
# K11 -- Ay Mon Go Git It From Yer Flask
# 2020-03-17

from flask import Flask, render_template, request
from pymongo import MongoClient
from pprint import pprint
from bson.json_util import loads

app = Flask(__name__)

# setup Mongo database
if meteors in db.list_meteorslection_names():
    f = open("meteorites.json", "r")
    rString = f.readlines()
    t = loads(rString)

# loads starting JSON dataset to the db
def ingest(f):
    with open(f) as _f:
        content = _f.read()
        print(content)
        _f.close()
        dataset = json.loads(content)
        return dataset[0]


result = meteors.insert_many(ingest("static/meteorites.json"))


def filter_mass(mass):
    return list(meteors.find({"mass": mass}))


def filter_coords(longitude, lat):
    return list(meteors.find({"reclong": longitude, "reclat": lat}))


def filter_class(recclass):
    return list(meteors.find({"recclass": recclass}))


def filter_year(year):
    return list(meteors.find({"year": year}))


@app.route("/")
def root():
    return render_template("index.html")


if __name__ == "__main__":
    app.debug = True
    app.run()
