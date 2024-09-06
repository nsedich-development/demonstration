package main

import (
	//"fmt"
	"html/template"
	"log"
	"net/http"
	"encoding/json"
)

type Todo struct {
	Id          int    `json:"id"`
	Name        string `json:"name"`
	IsCompleted bool   `json:"isCompleted"`
}

var todos = []Todo{
	{Id: 1, Name: "Learn Go", IsCompleted: false},
	{Id: 2, Name: "Learn Alpine", IsCompleted: false},
	{Id: 3, Name: "Go to the gym", IsCompleted: true},
}

var templates map[string]*template.Template

// Load templates on program initialisation
// https://www.digitalocean.com/community/tutorials/understanding-init-in-go
func init() {
	if templates == nil {
		templates = make(map[string]*template.Template)
	}

	templates["index.html"] = template.Must(template.ParseFiles("index.html"))
}

// handlers
func submitToDoHandler(w http.ResponseWriter, r *http.Request) {
	//name := r.PostFormValue("name")
	//completed := r.PostFormValue("completed") == "true"
	//todo := ToDo{Id: 4, Name: name, IsCompleted: completed}
	//fmt.Println(name,completed)
	w.Write([]byte("Response"))
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	json, err := json.Marshal(todos)
	
	if err != nil {
		log.Fatal(err)
	}

	tmpl := templates["index.html"]
	tmpl.ExecuteTemplate(w, "index.html", map[string]template.JS{"Todos": template.JS(json)})
}

func main() {
	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/submit-todo/", submitToDoHandler)
	log.Fatal(http.ListenAndServe(":8000", nil))
}