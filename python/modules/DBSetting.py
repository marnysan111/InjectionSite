from DBManager import DBManager
import csv    

dbm = DBManager()

with open("users.csv", encoding='utf8', newline='') as f:
    csvreader = csv.reader(f)
    for row in csvreader:
        dbm.insertUser(row[0], row[1])