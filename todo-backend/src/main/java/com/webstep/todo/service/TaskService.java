package com.webstep.todo.service;

import com.webstep.todo.factory.RepositoryFactory;
import com.webstep.todo.model.Task;
import com.webstep.todo.model.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {


    @Autowired
    RepositoryFactory repo;

    public Task saveTask(Task task){
       return repo.getTaskRepository().save(task);
    }

    @Transactional
    public void saveTaskToTodo(String todoId, Task task){
        Task newTask = repo.getTaskRepository().save(task);
        Optional<Todo> todo = repo.getTodoRepository().findOneById(todoId);
        if(todo.isPresent() ) {
            todo.get().getTasks().add(newTask);
            repo.getTodoRepository().save(todo.get());
        };

    }

    public List<Task> getAllTasks(){
        return repo.getTaskRepository().findAll();
    }

    public List<Task> getAllTasksOfTodo(String todoId){
        Optional<Todo> todo = repo.getTodoRepository().findOneById(todoId);
        return  todo.isPresent() ? todo.get().getTasks() : new ArrayList<Task>();
    }

    public void deleteAllTasks(){
        repo.getTaskRepository().deleteAll();
    }

    public void deleteOneTask(String id){
        repo.getTaskRepository().deleteById(id);
    }

    public Optional<Task> getOneTask(String id){
        return repo.getTaskRepository().findOneById(id);
    }
}
