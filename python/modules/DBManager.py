import MySQLdb
import os
from dotenv import load_dotenv

load_dotenv()
ADMIN_USER = os.getenv('ADMIN_USER')


class DBManager():
    def connect_db(self):
        """
        MySQLに接続
        Args:
            -
        Returns:
            connection
        """
        try:
            conn = MySQLdb.connect(
                host = 'mysql',
                user = os.getenv('USER'),
                db = os.getenv('DATABASE'),
                passwd = os.getenv('PASSWORD'),
            )
            return conn
        except Exception as error:
            exit(1)

    def migration(self):
        sql = "create table users (id int auto_increment, name varchar(10), email varchar(20), index (id));"
        conn = self.connect_db()
        try:
            db = conn.cursor()
            db.execute(sql)
            conn.close()
        except Exception as error:
            print(error)


    def selectAllUser(self):
        sql = "select * from users"
        conn = self.connect_db()
        try:
            db = conn.cursor()
            db.execute(sql)
            results = db.fetchall()
            conn.close()
            return results
        except Exception as error:
            print(error)
            return None

    def insertUser(self, name, email):
        sql = "insert into users (name, email) values(%s, %s)"
        conn = self.connect_db()
        try:
            print(name, email)
            db = conn.cursor()
            db.execute(sql, (name, email))
            conn.commit()
            conn.close
        except Exception as error:
            print(error)
            return None

    def selectOneUser(self, name, email):
        sql = "select * from users where name =" + "'" + str(name) + "' and email =" + "'" + str(email) + "';"
        conn = self.connect_db()
        try:
            print(sql)
            db = conn.cursor()
            db.execute(sql)
            results = db.fetchall()
            conn.close()
            return results
        except Exception as error:
            print(error)
            return None


    def selectUserNameStatus(self, name):
        sql = "select * from users where name = %s"
        conn = self.connect_db()
        try:
            db = conn.cursor()
            db.execute(sql, (name, ))
            result = db.fetchall()
            conn.close()
            return result
        except Exception as error:
            print(error)
            return None

    def selectUserEmailStatus(self, email):
        sql = "select * from users where email = %s"
        conn = self.connect_db()
        try:
            db = conn.cursor()
            db.execute(sql, (email, ))
            result = db.fetchall()
            conn.close()
            return result
        except Exception as error:
            print(error)
            return None