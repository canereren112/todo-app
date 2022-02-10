import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/model/Todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] | undefined;

  constructor(private todoService: TodoService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTodos();
  }

  private getTodos(){
    this.todoService.getTodoList().subscribe(data => {
      this.todos = data;
      console.log(this.todos);
    });
  }


  updateTodo(id: string| undefined){
    this.router.navigate(['update-todo', id]);
  }

  deleteTodo(id: string| undefined){
    this.todoService.deleteTodo(id).subscribe( data => {
      console.log(data);
      this.getTodos();
    })
  }
}