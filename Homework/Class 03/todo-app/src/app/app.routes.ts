import { Routes } from '@angular/router';
import { HomePage } from './components/homepage/homepage.component';
import { TodoList } from './components/todo-list/todo-list.component';
import { CreateTodo } from './components/create-todo/create-todo.component';

export const routes: Routes = [
    { path: '', component: HomePage},
    { path: 'todos', component: TodoList},
    { path: 'create-todo', component: CreateTodo}
];
