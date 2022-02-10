import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/model/Todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})

export class CreateTodoComponent implements OnInit {
  todo: Todo = new Todo();
  
  constructor(private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  saveTodo(){

    this.todoService.createTodo(this.todo ).subscribe(data => {
    this.goTodoList();
    }, error => console.log(error));
  }

  onSubmit(){

    console.log(this.todo);

    this.saveTodo()
  }

  goTodoList(){
    this.router.navigate(['/todos']);
  }

  
}

