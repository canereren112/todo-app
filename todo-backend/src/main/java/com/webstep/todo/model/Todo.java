package com.webstep.todo.model;

import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

@Document("todo")
public class Todo {
    @Id
    private String id;
    private String title;
    private String description;

    @DBRef
    private List<Task> tasks = new ArrayList<>();

    public Todo(){

    }
    public Todo(String id, String title, String description){
        this.id = id;
        this.title =title;
        this.description = description;
    };

    public Todo(String id, String title, String description, List<Task> tasks){
        this.id = id;
        this.title =title;
        this.description = description;
        this.tasks = tasks;
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

    public List<Task> getTasks() {
        return tasks;
    }

}
