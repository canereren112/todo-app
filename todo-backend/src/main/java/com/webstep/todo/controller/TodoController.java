package com.webstep.todo.controller;

import com.webstep.todo.model.Todo;
import com.webstep.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "${v1API}/")
public class TodoController {

    @Autowired
    TodoService todoService;

    @GetMapping("todo/{id}")
    public Optional<Todo> getOneTodo(@PathVariable String id) {
        return todoService.getOneTodo(id);
    }

    @GetMapping("todo")
    public List<Todo> getTodos() {
        return todoService.getAllTodos();
    }

    @PostMapping("todo")
    public void createTodo(@RequestBody Todo todo) {
        todoService.createTodo(todo);
    }

    //PUT is better but
    @PostMapping("todo/update/{id}")
    public void updateTodo(@PathVariable String id, @RequestBody Todo todo) {
        todo.setId(id);
        todoService.updateTodo(todo);
    }

    @DeleteMapping("todo/{id}")
    public void deleteTodo(@PathVariable String id) {
        todoService.deleteTodo(id);
    }
}
