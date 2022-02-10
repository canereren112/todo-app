import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../../model/Task'
import { Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  @Input()
  todoId!: string;
  tasks: Task[] | undefined;

  constructor(private taskService: TaskService,
              private router: Router) {
 }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getTasks();
  }
  private getTasks(){
    this.taskService.getTaskList(this.todoId).subscribe(data => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }


  updateTask(taskId: string| undefined){
    this.router.navigate(['update-todo/',this.todoId, 'update-task', taskId ]);
  }

  deleteTask(taskId: string| undefined){
    this.taskService.deleteTask(taskId).subscribe( data => {
      console.log(data);
      this.getTasks();
    })
  }
}
