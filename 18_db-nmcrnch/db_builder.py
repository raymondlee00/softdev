#ray. lee. and emory walsh
#SoftDev  
#skeleton :: SQLITE3 BASICS
#Oct 2019

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="abettertalos.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops




# with open('students.csv', newline='') as studentscsvfile:
#     studentscsvreader = csv.DictReader(studentscsvfile)
#     for row in studentscsvreader:
#         print(row['name'], row['age'], row['id'])

#==========================================================

# < < < INSERT YOUR POPULATE-THE-DB CODE HERE > > >

# creating a courses table out of the courses.csv file
c.execute("DROP TABLE IF EXISTS courses")
command = "CREATE table courses(code TEXT, mark INTEGER, id INTEGER)"        # test SQL stmt in sqlite3 shell, save as string
c.execute(command) 
with open('courses.csv', newline='') as coursescsvfile:
    coursescsvreader = csv.DictReader(coursescsvfile)
    for row in coursescsvreader:
        # print(row['code'], row['mark'], row['id'])
        c.execute("INSERT INTO courses VALUES (\"{}\", {}, {});".format(row['code'], row['mark'], row['id']))

# creating a students tables out of the students.csv file
c.execute("DROP TABLE IF EXISTS students")
command = "CREATE table students(name TEXT, age INTEGER, id INTEGER)"        # test SQL stmt in sqlite3 shell, save as string
c.execute(command) 
with open('students.csv', newline='') as studentscsvfile:
    studentscsvreader = csv.DictReader(studentscsvfile)
    for row in studentscsvreader:
        # print(row['name'], row['age'], row['id'])
        c.execute("INSERT INTO students VALUES (\"{}\", {}, {});".format(row['name'], row['age'], row['id']))

def calculateMeanAndInput():
    # building out a dictionary whose keys are the unique id's of the students and the values are a list of averages of corresponding courses
    command = "SELECT name, students.id, mark FROM students, courses WHERE students.id = courses.id ORDER BY students.id"
    data = c.execute(command)
    averagesDict = {}
    valArr = []
    counter = 1
    for line in data:
        if counter != line[1]: # new section of students id's
            averagesDict[counter] = valArr
            valArr = [] # clear out gpa array
            counter = line[1] # reset counter to the new student id that will be traversed
        valArr.append(line[2]) # if counter == line[1] or not, valArr will still append regardless

        print(line)
        print(averagesDict)

    averagesDict[counter] = valArr # to account for the last element of averagesDict
    print(averagesDict)

    # average all the elements in the lists of the values in averagesDict, to create a gpaDict
    gpaDict = {}
    for key in averagesDict:
        average = 0
        for val in averagesDict[key]: 
            average += val
        gpaDict[key] = average / len(averagesDict[key])
        print(gpaDict[key])

    # creating stu_mean table for each id and associated average
    c.execute("DROP TABLE IF EXISTS stu_mean")
    command = "CREATE table stu_mean(id INTEGER, avg INTEGER)"
    c.execute(command)
    for key in gpaDict:
        c.execute("INSERT INTO stu_mean VALUES ({}, {});".format(key, gpaDict[key]))

    return gpaDict

# facilating adding rows to courses table
c.execute("INSERT INTO courses VALUES (\"{}\", {}, {});".format("multi", 100, 1))
c.execute("INSERT INTO courses VALUES (\"{}\", {}, {});".format("complex", 100, 2))
c.execute("INSERT INTO courses VALUES (\"{}\", {}, {});".format("softdev", 100, 3))
c.execute("INSERT INTO courses VALUES (\"{}\", {}, {});".format("systems", 100, 4))
c.execute("INSERT INTO courses VALUES (\"{}\", {}, {});".format("physicsc", 100, 5))
c.execute("INSERT INTO courses VALUES (\"{}\", {}, {});".format("macro", 100, 6))

calculateMeanAndInput() # run this function to update the stu_mean with the new "multi" grade for student 1

#==========================================================

db.commit() #save changes
db.close()  #close database