#Clyde "Thluffy" Sinclair
#SoftDev  
#skeleton :: SQLITE3 BASICS
#Oct 2019

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="abettertalos.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops




with open('students.csv', newline='') as studentscsvfile:
    studentscsvreader = csv.DictReader(studentscsvfile)
    for row in studentscsvreader:
        print(row['name'], row['age'], row['id'])

#==========================================================

# < < < INSERT YOUR POPULATE-THE-DB CODE HERE > > >


command = "CREATE table courses(code TEXT, mark INTEGER, id INTEGER)"        # test SQL stmt in sqlite3 shell, save as string
c.execute(command) 
with open('courses.csv', newline='') as coursescsvfile:
    coursescsvreader = csv.DictReader(coursescsvfile)
    for row in coursescsvreader:
        print(row['code'], row['mark'], row['id'])
    to_db = [(i['code'], i['mark'], i['id']) for i in coursescsvreader]
    c.executemany("INSERT INTO courses (code, mark, id) VALUES (?, ?, ?);", to_db)

command = "CREATE table students(name TEXT, age INTEGER, id INTEGER)"        # test SQL stmt in sqlite3 shell, save as string
c.execute(command) 
with open('students.csv', newline='') as studentscsvfile:
    studentscsvreader = csv.DictReader(studentscsvfile)
    for row in studentscsvreader:
        print(row['name'], row['age'], row['id'])
    to_db = [(i['name'], i['age'], i['id']) for i in studentscsvreader]
    c.executemany("INSERT INTO students (name, age, id) VALUES (?, ?, ?);", to_db)

#==========================================================

db.commit() #save changes
db.close()  #close database