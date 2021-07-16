import os
import re
import json
import logging
import sqlite3
from pprint import pprint
from datetime import datetime
from lib.wiki_scrapper import grabSummary, grabInfoBoxAll, grabURL


formatter = logging.Formatter('%(asctime)s - %(message)s', datefmt='%Y-%m-%d : %H:%M:%S')
handler = logging.FileHandler('logs/logs.txt')
handler.setFormatter(formatter)
logger = logging.getLogger(__name__)
logger.addHandler(handler)
logger.setLevel(logging.INFO)

handler.setFormatter(formatter)


def check_database():
    if not os.path.exists('Data/sql/users.db'):
        test_json = {'disease' : 'test_disease', '0' : 'test_symptom'}
        conn = sqlite3.connect('Data/sql/users.db')
        cursor = conn.cursor()
        cursor.execute("CREATE TABLE users (id varchar(64), data json)")
        cursor.execute("insert into users values (?, ?)", ['0000', json.dumps(test_json)])
        conn.commit()
        conn.close()
        logger.info(f'Created new databse.')
        print('[+] Created users databse.')
    else:
        pass

def first_symptoms(main_data, mode):
    symptoms = []
    for row in main_data:
        for item in row:
            if item == 'disease':
                pass
            else:
                symptoms.append(row[item])
    symptoms = list(set(symptoms))
    if mode == 'a':
        autocomplete_symptoms = []
        for item in symptoms:
            tmp_dict = {}
            tmp_dict['name'] = item.title()
            autocomplete_symptoms.append(tmp_dict)
        return {'symptoms' : autocomplete_symptoms}
    else:
        return {'symptoms' : symptoms}


def disease_info(disease_name):
    try:
        summary = grabSummary(disease_name)
    except:
        summary = "Sorry, OMi couldn't find a description for this disease. Heydas. DSAd"

    try:
        information_box = grabInfoBoxAll(disease_name)
    except:
        information_box = ''

    try:
        url = grabURL(disease_name)
    except:
        url = "Wikipedia page not available."

    data = {'disease_name' : disease_name, 'summary' : summary, 'info_box' : information_box, 'url' : url}
    logger.info(f'Sent {disease_name} disease infromation.')
    return data



class User:
    def __init__(self, user_id = None, main_data = None, user_symptoms = None, mode = None, cursor = None, disease_name = None):
        self.user_id = user_id
        self.main_data = main_data
        self.user_symptoms = user_symptoms
        self.cursor = cursor
        self.mode = mode
        self.disease_name = disease_name


    def clean_sql(self):
        self.cursor.execute(f"DELETE FROM users WHERE data = '[]'")


    def create_user(self, user_id, main_data, user_symptoms, cursor):
        # Creates a list of diseases, symptoms data according to the usesr symptoms and creates a new value for the user in the database.
        new_data = []
        symptoms = []
        for row in main_data:
            for item in row:
                if item == 'disease':
                    pass
                elif self.user_symptoms == row[item]:
                    new_data.append(row)
                else:
                    pass

        for row in new_data:
            for item in row:
                if item == 'disease':
                    pass
                else:
                    symptoms.append(row[item])

        symptoms = list(set(symptoms))
        self.cursor.execute("insert into users values (?, ?)", [f'{self.user_id}', json.dumps(new_data)])
        with open('logs/data.json', 'w') as f:
            json.dump(new_data, f, indent=4)

        if self.mode == 'a':
            autocomplete_symptoms = []
            for item in symptoms:
                tmp_dict = {}
                tmp_dict['name'] = item.title()
                autocomplete_symptoms.append(tmp_dict)
            return {'symptoms' : autocomplete_symptoms}
        else:
            return {'symptoms' : symptoms}



    def search_user_data(self, user_id, main_data, user_symptoms, cursor):
        # Search the user data and updates it.
        self.cursor.execute(f"SELECT data FROM users WHERE id = '{self.user_id}'")
        searched_data = (self.cursor.fetchall())[0][0]
        searched_data = json.loads(searched_data)
        new_data = []
        symptoms = []

        for row in searched_data:
            for item in row:
                if user_symptoms == row[item]:
                    new_data.append(row)

        for row in new_data:
            for item in row:
                if item == 'disease':
                    pass
                else:
                    symptoms.append(row[item])

        self.cursor.execute(f"update users set data = (?) where id = (?)", [json.dumps(new_data), f'{user_id}'])


        print(f'Length: {len(searched_data)}')
        print(f'Length: {len(new_data)}')
        with open('logs/data.json', 'w') as f:
            json.dump(new_data, f, indent=4)
        if len(new_data) == 1:
            print('[+] Found disease!')
            disease_name = {'disease_name' : new_data[0]['disease'].title()}
            self.cursor.execute(f"DELETE FROM users WHERE id = '{self.user_id}'")
            print(f'[+] Deleted User {self.user_id}')
            logger.info(f'Found disease for user id: {self.user_id}.')
            logger.info(f'Deleted user id:{self.user_id} from the databse.')
            return {'disease' : [disease_name]}

        elif len(new_data) == 2:
            tmp_symptoms_1 = []
            tmp_symptoms_2 = []

            for row in new_data:
                for item in row:
                    if item == 'disease':
                        pass
                    else:
                        tmp_symptoms_1.append(row[item])

            for row in new_data:
                for item in row:
                    if item == 'disease':
                        pass
                    else:
                        tmp_symptoms_2.append(row[item])


            if tmp_symptoms_1 == tmp_symptoms_2:
                print('WHAAATTT THEY ARE THE EXACT SAME')
                disease_name_1 = {'disease_name' : new_data[0]['disease'].title()}
                disease_name_2 = {'disease_name' : new_data[1]['disease'].title()}


                self.cursor.execute(f"DELETE FROM users WHERE id = '{self.user_id}'")
                print(f'[+] Deleted User {self.user_id}')
                logger.info(f'Found two diseases for user id: {self.user_id}.')
                logger.info(f'Deleted user id:{self.user_id} from the databse.')
                return {'disease' : [disease_name_1, disease_name_2]}

            else:
                symptoms = list(set(symptoms))
                return {'symptoms' : symptoms}

        else:
            # Remove duplicates in symptoms
            symptoms = list(set(symptoms))
            return {'symptoms' : symptoms}


    def search_symptoms(self):
        self.cursor.execute("select id from users where id=?", (self.user_id,))
        searched_data = self.cursor.fetchall()
        if searched_data:
            print('[+] User found.')
            self.cursor.execute(f"SELECT data FROM users WHERE id = '{self.user_id}'")
            searched_data = (self.cursor.fetchall())[0][0]
            searched_data = json.loads(searched_data)


            symptoms = []
            for row in searched_data:
                for item in row:
                    if item == 'disease':
                        pass
                    else:
                        symptoms.append(row[item])

            symptoms = list(set(symptoms))

            if self.mode == 'a':
                autocomplete_symptoms = []
                for item in symptoms:
                    tmp_dict = {}
                    tmp_dict['name'] = item.title()
                    autocomplete_symptoms.append(tmp_dict)
                return {'symptoms' : autocomplete_symptoms}

            else:
                return {'symptoms' : symptoms}

        else:
            print('[+] User not found.')
            return self.create_user(self.user_id, self.main_data, self.user_symptoms, self.cursor)


    def search_disease(self):
        #Search for user_id in the database.
        self.cursor.execute("select id from users where id=?", (self.user_id,))
        searched_data = self.cursor.fetchall()
        if searched_data:
            print('[+] User found.')
            logger.info(f'Found user id: {self.user_id} in database.')
            return self.search_user_data(self.user_id, self.main_data, self.user_symptoms, self.cursor)

        else:
            print('[+] User not found.')
            logger.info(f'Created new user id:{self.user_id}.')
            return self.create_user(self.user_id, self.main_data, self.user_symptoms, self.cursor)
