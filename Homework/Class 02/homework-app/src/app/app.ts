import { Component, signal } from '@angular/core';
import { TaskMenager } from './components/task-menager.component';

@Component({
  selector: 'app-root',
  imports: [TaskMenager],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('homework-app');
}
