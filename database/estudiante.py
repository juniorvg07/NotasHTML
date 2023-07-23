import sqlite3
from flask import Flask, request, jsonify
from database.db_notas import consult, total

class Estudiante:
    def __init__(self, id, nombre, web, movil, desktop):
        self.id = id
        self.nombre = nombre
        self.web = web
        self.movil = movil
        self.desktop = desktop

def consult_est():
    obj = request.get_json()
    results = consult(obj["id"])
    if len(results) == 0:    
        print("el estudiante no existe")
        data = {'message':"error"}
        return jsonify(data) 
    else:
       return jsonify(results) 

def total_est():
    obj = request.get_json()
    results = total(obj["tabla"])
    if len(results) == 0:    
        print("error en el llamado de la tabla")
        data = {'message':"error"}
        return jsonify(data) 
    else:
       return jsonify(results)