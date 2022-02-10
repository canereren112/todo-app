import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/model/Todo';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})

export class UpdateTodoComponent implements OnInit {
  id!: string;
  todo : Todo = new Todo();
 
  constructor(private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router) { 

    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.todoService.getTodoById(this.id).subscribe(data => {
      this.todo = data;
    }
    , error => console.log("Get Error = ", error));
  }

  onSubmit(){
    this.todoService.updateTodo(this.id, this.todo).subscribe( data =>{
      this.goToTodoList();
    }
    , error => console.log("Update Error = ", error));
  }

  goToTodoList(){
    this.router.navigate(['/todos']);
  }
  
}

