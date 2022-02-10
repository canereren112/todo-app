import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from '../model/Task';
import { AppConstants } from '../constants/app.constants';


@Injectable({
  providedIn: 'root'
})


  export class TaskService {
    private baseURL = AppConstants.API_URL + "task";

    constructor(private httpClient: HttpClient) { }
  
    getTaskList(todoId: string| undefined ): Observable<Task[]>{
      return this.httpClient.get<Task[]>(`${AppConstants.API_URL}todo/${todoId}/task`);
    }
  
    createTask(todoId: string| undefined ,task: Task): Observable<Object>{
      return this.httpClient.post(`${AppConstants.API_URL}todo/${todoId}/task`, task);
    }
  
    updateTask(taskId: string| undefined, task: Task): Observable<Object>{
      return this.httpClient.post(`${AppConstants.API_URL}task/${taskId}`, task);
    }
  
    deleteTask(id: string | undefined): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
  
    getTaskById(id: string| undefined): Observable<Task>{
      return this.httpClient.get<Task>(`${this.baseURL}/${id}`);
    }
  
  
  }
  