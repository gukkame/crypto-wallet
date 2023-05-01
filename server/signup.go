package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
)

type userData struct {
	Username string `json:"username"`
	Secret   secret `json:"secret"`
	Password string `json:"password"`
}
type secret struct {
	Id   string `json:"id"`
	Word string `json:"word"`
}
type message struct {
	Msg   string `json:"msg"`
	Check bool   `json:"check"`
}

func signup(w http.ResponseWriter, req *http.Request) {

	decoder := json.NewDecoder(req.Body)

	var sigupData userData
	var msg message

	decoder.Decode(&sigupData)

	db, err := sql.Open("sqlite3", "./database/database.db")
	checkErr(err)

	msg = saveUser(db, sigupData)

	defer db.Close()
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(msg); err != nil {
		panic(err)
	}
}

// Save user to DataBase
func saveUser(db *sql.DB, sigupData userData) message {
	var msg message
	stmt, err := db.Prepare("INSERT INTO users (username, secret, password) values(?,?,?)")
	checkErr(err)

	// adds user to database
	stmt.Exec(sigupData.Username, sigupData.Secret, sigupData.Password)
	msg.Msg = "User successfuly created"
	msg.Check = true

	fmt.Println("User successfuly created")
	return msg
}
