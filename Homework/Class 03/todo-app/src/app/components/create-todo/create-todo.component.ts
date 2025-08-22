import { Component } from "@angular/core";
import { TodoService } from "../../services/todo.service";

@Component({
    selector: 'create-todo',
    standalone: true,
    imports: [],
    templateUrl: './create-todo.component.html',
    styleUrl: './create-todo.component.css',

})

export class CreateTodo {

    constructor(private readonly todoService: TodoService) { }

    title: string = '';
    description: string = '';

    clearInputs() {
        this.title = '';
        this.description = '';
    }

    handleSubmit() {
        console.log(this.title, this.description);
        this.todoService.createTodo(
            this.title,
            this.description,
        );
        this.clearInputs();
        console.log(this.title, this.description)
    }

    titleInput(event: Event) { 
        this.title = (event.target as HTMLInputElement).value;
    }

    descriptionInput(event: Event) {
        this.description = (event.target as HTMLTextAreaElement).value;
    }
}