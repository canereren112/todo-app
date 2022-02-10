import { Component, OnInit } from '@angular/core';
import { Task } from '../../../model/Task'
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  todoId!: string ;
  taskId!: string ;
  task: Task = new Task();

  constructor(private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.todoId = this.route.snapshot.params['todoId'];
    this.taskId = this.route.snapshot.params['taskId'];

    this.taskService.getTaskById(this.taskId).subscribe(data => {
      this.task = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.taskService.updateTask( this.taskId, this.task).subscribe( data =>{
      this.goToTodoList();
    }
    , error => console.log(error));
  }

  goToTodoList(){
    this.router.navigate(['/update-todo/',this.todoId]);
  }
  
}