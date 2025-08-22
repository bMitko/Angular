import { TodoStatus } from "../types/todo-status";

export const TodoData = [
    {
        id: '1',
        title: 'Learn Angular',
        description: 'Read and code a lot!',
        status: TodoStatus.IN_PROGRESS
    },
    {
        id: '2',
        title: 'Finish homeowork',
        description: 'Implement and understand all requirements.',
        status: TodoStatus.COMPLETED
    },
    {
        id: '3',
        title: 'Workout',
        description: 'Run, walk, gym or other activity',
        status: TodoStatus.IN_PROGRESS
    }
]
