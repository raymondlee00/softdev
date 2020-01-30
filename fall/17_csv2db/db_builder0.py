#Emory Walsh
#SoftDev pd1
#k17 -- No Trouble
#2019-10-10

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#==========================================================

# < < < INSERT YOUR POPULATE-THE-DB CODE HERE > > >
sql_create_courses_table = """ CREATE TABLE IF NOT EXISTS courses (
                                code TEXT, mark INTEGER, id INTEGER
                            );"""

c.execute(sql_create_courses_table)

with open("courses.csv", 'r') as csvCourses:
    reader = csv.DictReader(csvCourses)
    for row in reader:
        sql_insert_course = str.format("INSERT INTO courses VALUES ('{}', {}, {});", row['code'],  row['mark'], row['id'])
        #print(sql_insert_course)
        c.execute(sql_insert_course)

csvCourses.close()

sql_create_students_table = """ CREATE TABLE IF NOT EXISTS students (
                                code TEXT, mark INTEGER, id INTEGER
                            );"""

c.execute(sql_create_students_table)

with open("students.csv", 'r') as csvStudents:
    reader = csv.DictReader(csvStudents)
    for row in reader:
        sql_insert_student = str.format("INSERT INTO students VALUES ('{}', {}, {});", row['name'],  row['age'], row['id'])
        #print(sql_insert_student)
        c.execute(sql_insert_student)

csvStudents.close()

#command = ""          # test SQL stmt in sqlite3 shell, save as string
#c.execute(command)    # run SQL statement

#==========================================================

db.commit() #save changes
db.close()  #close database