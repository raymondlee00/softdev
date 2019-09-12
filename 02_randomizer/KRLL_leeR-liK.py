import random

KREWES = {'orpheus': [0, 1, 2], 'rex': [3, 4, 5], 'endymion': [6, 7, 8]}
print(random.choice(KREWES[random.choice(KREWES.keys())]))
