import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateTaskComponent } from './pages/task/update-task/update-task.component';
import { TaskListComponent } from './pages/task/task-list/task-list.component';
import { CreateTaskComponent } from './pages/task/create-task/create-task.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationInterceptorService } from './service/authentication-interceptor.service';
import { CreateTodoComponent } from './pages/todo/create-todo/create-todo.component';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { UpdateTodoComponent } from './pages/todo/update-todo/update-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateTaskComponent,
    TaskListComponent,
    CreateTaskComponent,
    LoginComponent,
    CreateTodoComponent,
    TodoListComponent,
    UpdateTodoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [	{
	  provide: HTTP_INTERCEPTORS,
	  useClass: AuthenticationInterceptorService,
	  multi: true,
	},],
  bootstrap: [AppComponent]
})
export class AppModule { }