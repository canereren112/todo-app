import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateTaskComponent } from './pages/task/update-task/update-task.component';
import { TaskListComponent } from './pages/task/task-list/task-list.component';
import { CreateTaskComponent } from './pages/task/create-task/create-task.component';
import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { CreateTodoComponent } from './pages/todo/create-todo/create-todo.component';
import { UpdateTodoComponent } from './pages/todo/update-todo/update-todo.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'update-todo/:todoId/tasks', component: TaskListComponent},
  {path: 'update-todo/:todoId/create-task', component: CreateTaskComponent},
  {path: 'update-todo/:todoId/update-task/:taskId', component: UpdateTaskComponent},
  {path: 'todos', component: TodoListComponent},
  {path: 'create-todo', component: CreateTodoComponent},
  {path: 'update-todo/:id', component: UpdateTodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
