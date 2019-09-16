import random

filepath = 'occupations.csv'
with open(filepath) as fp:
   fp.readline()
   line = fp.readline()
   dict = {}
   cnt = 1
   while line:
       #print("Line {}: {}".format(cnt, line.strip()))
       line = line.replace('"', '').replace('\n', '')
       splittedLine = line.rsplit(',', 1)
       #print(splittedLine[0])
       dict[splittedLine[0]] = splittedLine[1]
       line = fp.readline()
       cnt += 1
#print(dict)

def chooseOccupation():
    randomNum = random.randint(1, 998)
    dict.pop("Total")
    for val in dict:
        dict[val] = (float(dict[val]))
        if randomNum <= dict[val] * 10:
            print(dict[val] * 10)
            break

print(dict)

