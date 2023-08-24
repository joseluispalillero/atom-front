import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskFormComponent } from '../edit-task-form/edit-task-form.component';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss'],
})
export class TaskBoardComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  updateTaskStatus(updatedTask: Task): void {
    // Update task status using TaskService
    // Call loadTasks() again to refresh the list
  }

  deleteTask(taskToDelete: Task): void {
    // Delete task using TaskService
    // Call loadTasks() again to refresh the list
  }

  editTask(editedTask: Task): void {
    const dialogRef = this.dialog.open(EditTaskFormComponent, {
      width: '400px',
      data: editedTask,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle dialog close
      if (result) {
        // Handle the result if needed (e.g., perform an action)
      }
    });
  }

  // Handle the task drop event
  onTaskDrop(event: CdkDragDrop<Task[]>): void {

    console.log("previousIndex?", event.previousContainer.id)
    console.log("container?", event.container.id)

    if (event.previousContainer === event.container) {
      console.log("data?", event.container.data)
      console.log("previousIndex?", event.previousContainer.id)
      console.log("currentIndex?", event.currentIndex)
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log("moviendo?")
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      const updatedTask = event.container.data[event.currentIndex];
      this.updateTaskStatus(updatedTask);
    }
  }
}
