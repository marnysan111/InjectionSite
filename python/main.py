from flask import Flask, render_template, request, redirect, g, url_for, current_app, jsonify
from modules.DBManager import DBManager
from flask_cors import CORS
dbm = DBManager()

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "http://localhost:8080/"])



@app.route('/', methods=['GET'])
def main():
    dbm.migration()

    return "a"




@app.route('/users', methods=['GET'])
def getUsers():
    users = dbm.selectAllUser()
    return jsonify({"response": "success", "data": users})

@app.route('/insert', methods=['POST'])
def insertUser():
    data = request.get_json()
    status = dbm.selectUserNameStatus(data["name"])
    if len(status) != 0:
        return jsonify({"response": "error", "error": "同じ名前が登録されています"}), 400
    status = dbm.selectUserEmailStatus(data["email"])
    if len(status) != 0:
        return jsonify({"response": "error", "error": "同じメールアドレスが登録されています"}), 400
    dbm.insertUser(data["name"], data["email"])
    return jsonify({"response": "success"})

@app.route('/userOne', methods=['POST'])
def getUserOne():
    data = request.get_json()
    users = dbm.selectOneUser(data["name"], data["email"])
    return jsonify({"response": "success", "data": users})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)


