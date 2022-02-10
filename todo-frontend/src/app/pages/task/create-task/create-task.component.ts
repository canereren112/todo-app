import { Component, OnInit } from '@angular/core';
import { Task } from '../../../model/Task'
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
  export class CreateTaskComponent implements OnInit {
    todoId !: string ;

    task: Task = new Task();
    constructor(private taskService: TaskService,
                 private router: Router,
                 private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.todoId = this.route.snapshot.params['todoId'];
    }
    
  
    saveTask(){
      this.taskService.createTask(this.todoId,this.task).subscribe( data =>{
        console.log(data);
        this.goToTodoList();
      },
      error => console.log(error));
    }
  
    goToTodoList(){
      this.router.navigate(['/update-todo/',this.todoId]);
    }
    
    onSubmit(){
      console.log(this.task);
      this.saveTask();
    }
  }