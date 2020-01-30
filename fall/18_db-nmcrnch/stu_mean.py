#ray. lee. and emory walsh
#SoftDev  
#skeleton :: SQLITE3 BASICS
#Oct 2019

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="abettertalos.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#==========================================================

# < < < INSERT YOUR POPULATE-THE-DB CODE HERE > > >


command = "CREATE TABLE IF NOT EXISTS courses(code TEXT, mark INTEGER, id INTEGER)"        # test SQL stmt in sqlite3 shell, save as string
c.execute(command) 
with open('courses.csv', newline='') as coursescsvfile:
    coursescsvreader = csv.DictReader(coursescsvfile)
    for row in coursescsvreader:
        print(row['code'], row['mark'], row['id'])
        c.execute("INSERT INTO courses VALUES (\"{}\", {}, {});".format(row['code'], row['mark'], row['id']))

command = "CREATE table students(name TEXT, age INTEGER, id INTEGER)"        # test SQL stmt in sqlite3 shell, save as string
c.execute(command) 
with open('students.csv', newline='') as studentscsvfile:
    studentscsvreader = csv.DictReader(studentscsvfile)
    for row in studentscsvreader:
        print(row['name'], row['age'], row['id'])
        c.execute("INSERT INTO students VALUES (\"{}\", {}, {});".format(row['name'], row['age'], row['id']))

q = "SELECT name, students.id, mark FROM students, courses WHERE students.id = courses.id;"
foo = c.execute(q)

#==========================================================

db.commit() #save changes
db.close()  #close database