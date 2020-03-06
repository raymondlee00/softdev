# Team SpaceX: amanda, michael, ray.
# SoftDev2 pd1
# K#10: Import/Export Bank
# 2020-03-03

# Dataset: Earth Meteorite Landings
# Collection of data of 1000 meteors that landed on Earth by NASA
# Includes their name, class, date fell, and coordinates where it fell
# Link: https://data.nasa.gov/resource/y77d-th95.json
# We imported that dataset onto mongo by reading the json into a string and loading it into mongo.
# Before loading we cleaned the dataset be removing the last two extra columns for some rows
# ,":@computed_region_cbhk_fwbd":"[0-9]{1,}",":@computed_region_nnqa_25f4":"[0-9]{1,}"

# from pymongo import MongoClient
# from bson.json_util import loads
# from pprint import pprint

# client = MongoClient("localhost", 27017)
# db = client.test_database
# spacex = db.spacex

# # loads starting JSON dataset to the db
# def ingest(f):
#     with open(f) as _f:
#         return loads(f'[{",".join(map(lambda s: s[:-1], _f))}]')

# result = spacex.insert_many(ingest("meteorites.json"))

# teamRAM - Michael Zhang and Amanda Chen
# SoftDev pd1
# K10: Import/Export Bank
# 2020-03-02

from pymongo import MongoClient
from bson.json_util import loads
from pprint import pprint

client = MongoClient("localhost")
db = client.RAM
meteors = db.meteors

if meteors in db.list_meteorslection_names():
    f = open("meteorites.json", "r")
    rString = f.readlines()
    t = loads(rString)


def filter_mass(mass):
    return list(meteors.find({"mass": mass}))


def filter_coords(longitude, lat):
    return list(meteors.find({"reclong": longitude, "reclat": lat}))


def filter_class(recclass):
    return list(meteors.find({"recclass": recclass}))


def filter_year(year):
    return list(meteors.find({"year": year}))

