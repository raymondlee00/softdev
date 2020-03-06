# teamRM* - Michael Zhang and ray. lee.
# SoftDev pd1
# K11: Ay Mon Go Git It From Yer Flask
# 2020-03-06

from flask import Flask, render_template
from pymongo import MongoClient
from bson.json_util import loads
from pprint import pprint

client = MongoClient("localhost", 27017)
db = client.RM
meteors = db.meteors

# loads starting JSON dataset to the db
def ingest(f):
    with open(f) as _f:
        return loads(f'[{",".join(map(lambda s: s[:-1], _f))}]')

result = meteors.insert_many(ingest("meteorites.json"))

def filter_mass(mass):
    return list(meteors.find({"mass": mass}))


def filter_coords(longitude, lat):
    return list(meteors.find({"reclong": longitude, "reclat": lat}))


def filter_class(recclass):
    return list(meteors.find({"recclass": recclass}))


def filter_year(year):
    return list(meteors.find({"year": year}))

app = Flask(__name__)

@app.route("/")
def root():
    return render_template("index.html")

if __name__ == "__main__":
    app.debug = True
    app.run()