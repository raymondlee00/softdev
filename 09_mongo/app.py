from pymongo import MongoClient
from bson.json_util import loads
from pprint import pprint

client = MongoClient('localhost', 27017)
db = client.test_database

restaurants = db.restaurants

# loads starting JSON dataset to the db
def ingest(f):
    with open(f) as _f:
    	return loads(f'[{",".join(map(lambda s: s[:-1], _f))}]')

result = restaurants.insert_many(ingest('primer-dataset.json'))

# search all restaurants in in a given borough
def search_borough(borough):
	query = restaurants.find({'borough': borough})
	return [restaurant for restaurant in query]
	#result = list()
	#for restaurant in query:
	#	result.append(restaurant)
	#return result

# res = search_borough('Brooklyn')
# pprint(res)
# pprint(len(search_borough('Brooklyn')))
# pprint(search_borough('Brooklyn')[:5])

# search all restaurants in a given zipcode
def search_zipcode(zipcode):
	query = restaurants.find({'address.zipcode': zipcode})
	return [restaurant for restaurant in query]

# pprint(search_zipcode('11221')[:5])

# search all restaurants in a given zipcode and has a given grade
def search_zipcode_grade(zipcode, grade):
	query = restaurants.find({
		'address.zipcode': zipcode,
		'grades': {'$elemMatch': {'grade': grade} }
		 })
	return [restaurant for restaurant in query]

# pprint(search_zipcode_grade('11221', 'B')[:5])

# search all restaurants in a given zipcode with a score below a given threshold
def search_zipcode_score_threshold(zipcode, score_threshold):
	query = restaurants.find({'address.zipcode': zipcode, 'grades': {'$elemMatch': {'score': {'$lt': score_threshold}}}})
	return [restaurant for restaurant in query]

pprint(search_zipcode_score_threshold('11221', 12)[:5])