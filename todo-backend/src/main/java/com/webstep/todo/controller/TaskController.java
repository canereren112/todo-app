package com.webstep.todo.controller;

import com.webstep.todo.factory.ServiceFactory;
import com.webstep.todo.model.Task;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "${v1API}/")
public class TaskController {

    @Autowired
    ServiceFactory serviceFactory;

    @GetMapping("/task")
    public List<Task> getTasks() {
        return serviceFactory.getTaskService().getAllTasks();
    }

    @GetMapping("todo/{todoId}/task")
    public List<Task> getAllTodoTasks(@PathVariable String todoId) {
        return serviceFactory.getTaskService().getAllTasksOfTodo(todoId);
    }

    @PostMapping("todo/{todoId}/task")
    public void createTask(@PathVariable String todoId, @RequestBody Task task) {
        serviceFactory.getTaskService().saveTaskToTodo(todoId, task);
    }

    //PUT is better but cross origin problme
    @PostMapping("task/{taskId}")
    public void updateTask( @PathVariable String taskId, @RequestBody Task task) {
        task.setId(taskId);
        serviceFactory.getTaskService().saveTask(task);
    }


    @DeleteMapping("task/{id}")
    public void deleteTask(@PathVariable String id) {
        serviceFactory.getTaskService().deleteOneTask(id);
    }

    @GetMapping("task/{id}")
    public Optional<Task> getTask(@PathVariable String id) {
        return serviceFactory.getTaskService().getOneTask(id);
    }
}
