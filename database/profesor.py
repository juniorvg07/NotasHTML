from flask import Flask, request, jsonify
from database.db_notas import consultProf

class Profesor:
    def __init__(self, id, nombre, password, asignatura):
        self.id = id
        self.nombre = nombre
        self.password = password
        self.asignatura = asignatura


def consult_prof():
    obj = request.get_json()
    results = consultProf(obj["id"])
    if len(results) == 0:    
        print("ID de profesor no encontrado")
        data = {'message':"error"}
        return jsonify(data) 
    else:
       return jsonify(results)