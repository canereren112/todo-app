package com.webstep.todo.factory;

import com.webstep.todo.service.TaskService;
import com.webstep.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ServiceFactory {
    @Autowired
    TaskService taskService;

    @Autowired
    TodoService todoService;

    public ServiceFactory (){}

    public TaskService getTaskService() {
        return taskService;
    }

    public TodoService getTodoService() {
        return todoService;
    }
}
