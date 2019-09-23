# raymond lee "ray. lee."
# softdev pd1
# Emoji
# 2019-09-22

from flask import Flask, render_template
app = Flask(__name__)

import random

file = open("occupations.csv", "r")
lines = file.readlines()[1:] #skip header line
lines = lines[:-1] #get rid of total line since that is not useful for this assignment

#Make empty dictionaries and array for random selection
occupationsDict = {}
occupationsArray = []

for line in lines:
    parsed = line.rsplit(",", 1) #allows me to split from the rightmost comma of a line - avoids issue of an occupation having a comma
    jobClass = parsed[0].replace('"', '')
    percentage = float(parsed[1]) #must be stored as a number per instructions
    occupationsDict[jobClass] = percentage
    for i in range(int(percentage * 10)): #Arrays don't take floats as indices and I don't want to chop off the decimal - multiply by 10 to get rid of tenths place
        occupationsArray.append(jobClass)

file.close() #courtesy? idk I just remember being told to do this in intro2 no matter what

#Randomly chooses an occupation weighted based on percentage
def pickOccupation():
    index = random.randint(0, len(occupationsArray) - 1)
    return occupationsArray[index]

#Testing printing out the entire dictionary
for key in occupationsDict:
    print(key + " " + str(occupationsDict[key]))

print('\n')

@app.route("/occupyflaskst")
def test_tmplt():
    file = open("occupations.csv", "r")
    lines = file.readlines()[1:] #skip header line
    #lines = lines[:-1] #get rid of total line since that is not useful for this assignment

    #Make empty dictionaries and array for random selection
    occupationsDict = {}
    occupationsArray = []

    for line in lines:
        parsed = line.rsplit(",", 1) #allows me to split from the rightmost comma of a line - avoids issue of an occupation having a comma
        jobClass = parsed[0].replace('"', '')
        percentage = float(parsed[1]) #must be stored as a number per instructions
        occupationsDict[jobClass] = percentage
        for i in range(int(percentage * 10)): #Arrays don't take floats as indices and I don't want to chop off the decimal - multiply by 10 to get rid of tenths place
            occupationsArray.append(jobClass)

    file.close() #courtesy? idk I just remember being told to do this in intro2 no matter what

    randomlyPickedOccupation = pickOccupation()
    print("Randomly picked: " + randomlyPickedOccupation)

    return render_template(
            "index.html",
            pickedOccupation = randomlyPickedOccupation,
            dict = occupationsDict.items(),
    )

if __name__ == "__main__":
	app.debug = True
	app.run()