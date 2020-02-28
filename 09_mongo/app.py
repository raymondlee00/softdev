from pymongo import MongoClient
from bson.json_util import loads
from pprint import pprint

client = MongoClient("localhost", 27017)
db = client.test_database
restaurants = db.restaurants

# loads starting JSON dataset to the db
def ingest(f):
    with open(f) as _f:
        return loads(f'[{",".join(map(lambda s: s[:-1], _f))}]')

# result = restaurants.insert_many(ingest("primer-dataset.json"))

# search all restaurants in in a given borough
def search_borough(borough):
    query = restaurants.find({"borough": borough})
    return [restaurant for restaurant in query]

# pprint(search_borough("Brooklyn")[:5])

# search all restaurants in a given zipcode
def search_zipcode(zipcode):
    query = restaurants.find({"address.zipcode": zipcode})
    return [restaurant for restaurant in query]

# pprint(search_zipcode("11221")[:5])

# search all restaurants in a given zipcode and has a given grade
def search_zipcode_grade(zipcode, grade):
    query = restaurants.find(
        {"address.zipcode": zipcode, "grades.grade": grade}
    )
    return [restaurant for restaurant in query]

# pprint(search_zipcode_grade("11221", "B")[:5])

# search all restaurants in a given zipcode with a score below a given threshold
def search_zipcode_score(zipcode, score):
    query = restaurants.find(
        {
            "address.zipcode": zipcode,
            "grades.score": {"$lt": score},
        }
    )
    return [restaurant for restaurant in query]

# pprint(search_zipcode_score("11221", 20)[:5])

# search all restaurants within an x/y offset of the coordinates (73, 40) and a given date
def search_coords_date(offset):
    xlower, xupper, ylower, yupper = (
        -1 * 73 - offset,
        -1 * 73 + offset,
        40 - offset,
        40 + offset,
    )
    query = restaurants.find(
        {"$or": [{"address.coord.0": {"$gte": xlower}}, {"address.coord.1": {"$lte": xupper}}]}
        
    )
    return [restaurant for restaurant in query]

pprint(search_coords_date(1))
