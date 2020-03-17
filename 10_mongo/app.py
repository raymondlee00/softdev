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

from pymongo import MongoClient
import json
from pprint import pprint

client = MongoClient("localhost", 27017)

db = client.spacex
meteorites = db.meteorites
meteorites.drop()

# loads starting JSON dataset to the db
def ingest(fin):
    with open(fin) as _fin:
        content = _fin.read()
        _fin.close()
        dataset = json.loads(content)
        meteorites.insert_many(dataset)
        return dataset

result = ingest("meteorites.json")

pprint(result)

def search_name(name):
    query = meteorites.find({'name': name})
    return [meteorite for meteorite in query]


