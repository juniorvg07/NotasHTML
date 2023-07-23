import sqlite3

def connect():
    try:
        conn = sqlite3.connect("notas.db")
        cursor = conn.cursor()
        return conn
    except sqlite3.Error as err:
        print(err)
        return None


def update(id, asignatura, nota):
        conn = sqlite3.connect("notas.db")
        cursor = conn.cursor()
        try:
            instruccion = "UPDATE estudiante SET " + asignatura + "=" +  str(nota) + " WHERE id=" + str(id) + ";"
            cursor.execute(instruccion)
            conn.commit()
            print("Nota actualizada")
            return True
        except sqlite3.Error as err:
            print("error: " + str(err))
            return False
        
def consult(id): 
        try:
            conn = sqlite3.connect("notas.db")
            cursor = conn.cursor()
            instruction = "SELECT * FROM estudiante WHERE id=" + str(id) + ";"         
            cursor.execute(instruction)
            notas = cursor.fetchone()
            return notas
        except sqlite3.Error as err:
            print("error: " + str(err))

def total(tabla): 
        try:
            conn = sqlite3.connect("notas.db")
            cursor = conn.cursor()
            instruction = "SELECT * FROM " + str(tabla) + ";"         
            cursor.execute(instruction)
            notas = cursor.fetchall()
            return notas
        except sqlite3.Error as err:
            print("error: " + str(err))


def consultProf(id): 
        try:
            conn = sqlite3.connect("notas.db")
            cursor = conn.cursor()
            instruction = "SELECT * FROM profesores WHERE id=" + str(id) + ";"        
            cursor.execute(instruction)
            datos = cursor.fetchone()
            return datos
        except sqlite3.Error as err:
            print("error: " + str(err))