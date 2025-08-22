import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TodoData } from "../components/data/todos";
import { TodoStatus } from "../components/types/todo-status.enum";
import { Todo } from "../components/types/todo.type";

@Injectable({
    providedIn: 'root'
})

export class TodoService {
    private _todos = new BehaviorSubject(TodoData)
    todos$ = this._todos.asObservable()

    constructor() { }

    deleteTodo(id: string) {
        const todos = this._todos
            .getValue()
            .filter((todo) => todo.id !== id)

        this._todos.next(todos)
    }

    updateTodo(id: string, newStatus: TodoStatus) {
        const updatedTodos = this._todos.getValue()
            .map(todo => {
                if (todo.id === id) {
                    return { ...todo, status: newStatus };
                }
                console.log(todo)
                return todo;
            });

        this._todos.next(updatedTodos);
    }

    createTodo(title: string, description: string) {
        const newTodo: Todo = {
            id: Date.now().toString(),
            title,
            description,
            status: TodoStatus.PENDING,
        };

        const todos = this._todos.value;

        this._todos.next([...todos, newTodo]);
    }
}