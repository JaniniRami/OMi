import json
import sqlite3
from flask import Flask
from flask import render_template, url_for, jsonify, Response
from lib.search_database import User, check_database, first_symptoms, disease_info

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/fsymptoms/m/<mode>')
def fsymptoms(mode):
    with open('Data/json/dataset.json') as f:
        data = json.load(f)
    data = first_symptoms(data, mode)
    response = jsonify({'data' : data})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response



@app.route('/description/<disease_name>')
def description(disease_name):
    data = disease_info(disease_name)
    response = jsonify({'data' : data})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response



@app.route('/symptoms/u/<user_id>/m/<mode>')
def symptoms(user_id, mode):
    # autocomplete --> a
    # more --> m
    check_database()
    conn = sqlite3.connect('Data/sql/users.db')
    cursor = conn.cursor()
    with open('Data/json/dataset.json') as f:
        data = json.load(f)
    user =  user = User(str(user_id) , data, '', mode, cursor)
    user =  user = User(user_id = str(user_id) , main_data = data, mode = mode, cursor = cursor)
    data =  user.search_symptoms()
    conn.commit()
    conn.close()
    response = jsonify({'data' : data})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/disease/<user_symptom>/u/<user_id>/')
def update_data(user_id, user_symptom):
    print(user_id)
    user_symptom = user_symptom.lower()
    check_database()
    conn = sqlite3.connect('Data/sql/users.db')
    cursor = conn.cursor()
    cursor.execute(f"DELETE FROM users WHERE data = '[]'")
    with open('Data/json/dataset.json') as f:
        data = json.load(f)
    user = User(user_id = str(user_id) , main_data = data, user_symptoms = str(user_symptom), cursor = cursor)
    data =  user.search_disease()
    conn.commit()
    conn.close()
    response = jsonify({'data' : data})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == '__main__':
    app.run(debug=True, port=8080)
