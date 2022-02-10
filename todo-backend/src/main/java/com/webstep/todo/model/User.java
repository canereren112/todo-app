package com.webstep.todo.model;


import javax.persistence.Entity;

@Entity
public class User {

    private long id;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
