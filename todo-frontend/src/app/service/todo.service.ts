import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AppConstants } from '../constants/app.constants';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root'
})



export class TodoService {
  private baseURL = AppConstants.API_URL + "todo";

  constructor(private httpClient: HttpClient) { }

  getTodoList(): Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(`${this.baseURL}`);
  }

  createTodo(todo: Todo): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, todo);
  }

  updateTodo(id: string| undefined, todo: Todo): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/update/${id}`, todo);
  }

  deleteTodo(id: string | undefined): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getTodoById(id: string| undefined): Observable<Todo>{
    return this.httpClient.get<Todo>(`${this.baseURL}/${id}`);
  }


}
