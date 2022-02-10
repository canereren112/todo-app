package com.webstep.todo.service;

import com.webstep.todo.factory.RepositoryFactory;
import com.webstep.todo.model.Todo;
import com.webstep.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    @Autowired
    RepositoryFactory repo;

    public void createTodo(Todo todo){
        repo.getTodoRepository().save(todo);
    }

    public void updateTodo(Todo todo){
        repo.getTodoRepository().save(todo);
    }

    public Optional<Todo> getOneTodo(String id){
        return repo.getTodoRepository().findOneById(id);
    }

    public List<Todo> getAllTodos(){
        return repo.getTodoRepository().findAll();
    }

    public void deleteTodo(String id){
        repo.getTodoRepository().deleteById(id);
    }

}
