from pymongo import MongoClient
from bson.json_util import loads
from pprint import pprint
import json

client = MongoClient("localhost", 27017)
db = client.test_database
earthMeteoriteLandings = db.earthMeteoriteLandings

# loads starting JSON dataset to the db
def ingest(f):
    with open(f) as _f:
        return loads(f'[{",".join(map(lambda s: s[:-1], _f))}]')

result = earthMeteoriteLandings.insert_many(ingest("y77d-th95.json"))

