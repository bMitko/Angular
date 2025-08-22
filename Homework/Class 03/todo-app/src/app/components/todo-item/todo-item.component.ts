import { Component, input, signal } from "@angular/core";
import { Todo } from "../types/todo.type";
import { TodoStatus } from "../types/todo-status.enum";
import { TodoService } from "../../services/todo.service";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'todo-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './todo-item.component.html',
    styleUrl: './todo-item.component.css',
})

export class TodoItem {
    todo = input.required<Todo>()

    showStatusOptions = signal<boolean>(false);

    constructor(private readonly todoService: TodoService) { }

    changeStatusList() {
        return Object.entries(TodoStatus)
            .filter(([_, value]) => value !== this.todo().status)
            .map(([key, value]) => ({ key, value }));
    }

    handleDelete() {
        this.todoService.deleteTodo(this.todo().id)
    }

    toggleStatusOptions() {
        this.showStatusOptions.update((visible: boolean) => !visible);
    }

    handleUpdate(newStatus: string) {
        this.todoService.updateTodo(this.todo().id, newStatus as TodoStatus)
        this.showStatusOptions.set(false);
    }

    getStatusClass(status: TodoStatus): string {
        switch (status) {
            case TodoStatus.PENDING:
                return 'pending';
            case TodoStatus.IN_PROGRESS:
                return 'in-progress';
            case TodoStatus.COMPLETED:
                return 'completed';
            default:
                return '';
        }
    }
}