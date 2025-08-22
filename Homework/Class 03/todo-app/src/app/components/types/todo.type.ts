import { TodoStatus } from "./todo-status";

export interface Todo {
    id: string;
    title: string;
    description: string;
    status: TodoStatus
}