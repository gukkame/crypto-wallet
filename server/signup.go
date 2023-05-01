package main

import (
	"database/sql"
	"encoding/json"
	"net/http"

)

//! Just example, 

func signup(w http.ResponseWriter, req *http.Request) {

	json.NewDecoder(req.Body)

	var postdata []post
	db, err := sql.Open("sqlite3", "./database/database.db")
	checkErr(err)

	saveUser(db)

	defer db.Close()
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(postdata); err != nil {
		panic(err)
	}
}

func saveUser(db *sql.DB) {}