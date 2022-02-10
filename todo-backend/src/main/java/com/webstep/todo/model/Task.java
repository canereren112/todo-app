package com.webstep.todo.model;


import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


import javax.persistence.Id;

@Document("task")
public class Task {

    @Id
    private String id;
    private String title;
    private String description;

    @DBRef(lazy = true)
    private  Todo todo;

    public Task(){

    }

    public Task(String id, String title, String description, Todo todo){
        this.id = id;
        this.title =title;
        this.description = description;
        this.todo = todo;
    };

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Todo getTodo() {
        return todo;
    }

    public void setTodo(Todo todo) {
        this.todo = todo;
    }
}
