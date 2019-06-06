#!/usr/bin/python3

import pymysql
from pynput.keyboard import Key, Listener


db = pymysql.connect("localhost", "root", "Auto-123", "screen_in_the_middle")
cursor = db.cursor()

cursor.execute("SELECT hits FROM keyhits")
data = cursor.fetchone()
keyhits = data[0]


def countKeyHits(key):
    global keyhits
    keyhits += 1
    cursor.execute("UPDATE keyhits SET hits = " +
                   str(keyhits) + " WHERE id = 1;") 
    db.commit()


with Listener(on_press=countKeyHits) as listener:
    listener.join()
