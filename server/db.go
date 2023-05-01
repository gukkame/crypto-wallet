package main

import (
	"database/sql"
	"log"
	"os"

	_ "github.com/mattn/go-sqlite3"
)

func database() {
	os.Remove("./database/database.db")

	log.Println("Creating sqlite-database.db...")

	file, err := os.Create("./database/database.db")
	if err != nil {
		log.Fatal(err.Error())
	}
	file.Close()
	log.Println("database.db created")

	dbConn, err := sql.Open("sqlite3", "./database/database.db")
	if err != nil {
		log.Fatal(err.Error())
		return
	}
	createTable(dbConn)
	createUser(dbConn)

	defer dbConn.Close()
}
func createTable(dbConn *sql.DB) {

	statement, _ := dbConn.Prepare(`
	CREATE TABLE  users  (
		id  INTEGER not null PRIMARY KEY AUTOINCREMENT,
		username varchar(255) not null unique,
		secret varchar(255) not null,
		password varchar(255) not null
	 )
		`)
	_, err := statement.Exec()
	if err != nil {
		log.Fatal(err.Error())
		return
	}
}

func createUser(dbConn *sql.DB) {

	stmt, err := dbConn.Prepare(`INSERT INTO users(id, username, secret, password) VALUES(?, ?, ?, ?)`)
	if err != nil {
		log.Fatal(err.Error())
		return
	}
	stmt.Exec("1", "Gunta", "CSS Grid and Flexbox", "CSS Grid and Flexbox designs.")

}
