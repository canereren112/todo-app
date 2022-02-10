package com.webstep.todo.factory;

import com.webstep.todo.repository.TaskRepository;
import com.webstep.todo.repository.TodoRepository;
import com.webstep.todo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class RepositoryFactory {

    @Autowired
    private TodoRepository todoRepository;

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;

    public RepositoryFactory(){

    }

    public TaskRepository getTaskRepository() {
        return taskRepository;
    }

    public TodoRepository getTodoRepository() {
        return todoRepository;
    }

    public UserRepository getUserRepository() {
        return userRepository;
    }
}
