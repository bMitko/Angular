import { Component, signal } from '@angular/core';
import { Task } from '../tasks/task.type';
import { taskData } from '../tasks/task.data';

@Component({
    selector: 'app-task-menager',
    standalone: true,
    templateUrl: './task-menager.component.html',
    styleUrl: './task-menager.component.css'
})

export class TaskMenager {

    tasks = signal<Task[]>(taskData);
    newTask = signal<string>('');

    handleInput(event: Event) {
        const input = (event.target as HTMLInputElement);
        this.newTask.set(input.value)
    }

    addTask() {
        const inputValue = this.newTask().trim();
        if (inputValue) {
            const task: Task = {
                id: Date.now(),
                description: inputValue,
                status: false
            };
            this.tasks.update(tasks => [...tasks, task]);
            const timestamp = new Date().toLocaleString()
            console.log('Task added:', task, 'at', timestamp);
            this.newTask.set('');
        }
    }

    changeStatus(task: Task) {
        task.status = !task.status;
        const timestamp = new Date().toLocaleString()
        console.log('Task updated:', task, 'at', timestamp);
    }

    clearAllTasks() {
        this.tasks.set([]);
        const timestamp = new Date().toLocaleString()
        console.log('All tasks cleared', timestamp);
    }

    completedTasks() {
        return this.tasks().filter(task => task.status).length;
    }

    pendingTasks() {
        return this.tasks().filter(task => !task.status).length;
    }
    
}