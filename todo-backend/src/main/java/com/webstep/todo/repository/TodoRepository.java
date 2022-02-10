package com.webstep.todo.repository;

import com.webstep.todo.model.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TodoRepository extends MongoRepository<Todo, String> {
    @Query("{title:'?0'}")
    Todo findItemByTitle(String title);

    @Query(value = "{id:'?0'}", fields = "{'id' : 1, 'title' : 1, 'description' : 1}")
    List<Todo> findAll(String id);

    @Query("{id:'?0'}")
    Optional<Todo> findOneById(String id);


    public long count();

}
