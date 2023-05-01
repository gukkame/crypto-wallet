package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

//! Just example,

func login(w http.ResponseWriter, req *http.Request) {

	decoder := json.NewDecoder(req.Body)

	var loginData userData
	var msg message

	decoder.Decode(&loginData)

	db, err := sql.Open("sqlite3", "./database/database.db")
	checkErr(err)

	msg = getUser(db, loginData.Username)

	defer db.Close()
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(msg); err != nil {
		panic(err)
	}
}

func getUser(db *sql.DB, searchUsername string) message {
	rows, err := db.Query("SELECT username, password FROM users WHERE username = ?", searchUsername)
	checkErr(err)

	err = rows.Err()
	if err != nil {
		log.Fatal(err)
	}

	var people userData

	// loop through database table
	for rows.Next() {
		err = rows.Scan(&people.Username, &people.Password)
		checkErr(err)
	}
	err = rows.Err()
	if err != nil {
		log.Fatal(err)
	}

	//TODO Check if user exist or not. Yes send user, No send message

	fmt.Print("Log in person: ", people)
	return message{Msg: "done"}

}
