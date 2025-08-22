import { Component, signal } from "@angular/core";
import { TodoItem } from "../todo-item/todo-item.component";
import { Todo } from "../types/todo.type";
import { TodoService } from "../../services/todo.service";

@Component({
    selector: 'todo-list',
    standalone: true,
    imports: [TodoItem],
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css',
   
})

export class TodoList {
    todos = signal<Todo[]>([])

    constructor(private readonly todoService: TodoService) {}

    ngOnInit() {
        this.todoService.todos$.subscribe((data) => { 
            console.log(data)
            this.todos.set(data)
        })
    }

}