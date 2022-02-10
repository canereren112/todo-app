package com.webstep.todo.dto;

public class TaskDto {

    private long id;
    private String title;
    private String description;
    private String assignee;


    public TaskDto(long id, String title, String description, String assignee){
        this.id = id;
        this.title =title;
        this.description = description;
        this.assignee = assignee;
    };

    public long getId() {
        return id;
    }

    public void setId(long id) {
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

    public String getAssignee() {
        return assignee;
    }

    public void setAssignee(String assignee) {
        this.assignee = assignee;
    }
}
