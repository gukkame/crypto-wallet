package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {

	// Create database
	database()

	http.HandleFunc("/login", login)   // Log in page
	http.HandleFunc("/signup", signup) // Sign up page

	// Golang server
	fmt.Printf("API Server running at port http://localhost:8080/\n")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Println("(server.go) Golang server has stopped due to:")
		log.Fatal(err)
	}
}

func checkErr(err error) {
	if err != nil {
		fmt.Println("ERROR")
		panic(err)
	}
}
