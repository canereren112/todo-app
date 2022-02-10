package com.webstep.todo.repository;

import com.webstep.todo.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface TaskRepository extends MongoRepository<Task, String> {
    @Query("{title:'?0'}")
    Task findItemByName(String title);

  //  @Query(value = "{id:'?0'}", fields = "{'id' : 1, 'title' : 1, 'description' : 1}")

    @Query("{id:'?0'}")
    Optional<Task> findOneById(String id);

    public long count();

}
