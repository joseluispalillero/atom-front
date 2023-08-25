import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { NewEditTaskFormComponent } from '../new-edit-task-form/new-edit-task-form.component';
import { DeleteTaskFormComponent } from '../delete-task-form/delete-task-form.component';
@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss'],
})
export class TaskBoardComponent implements OnInit {
  pendingTasks: Task[] = []; // Initialize with pending tasks
  completedTasks: Task[] = []; // Initialize with completed tasks
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;

  constructor(private taskService: TaskService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.pendingTasks = tasks.filter(item => item.status === 'PENDIENTE');
      this.completedTasks = tasks.filter(item => item.status === 'COMPLETO');
    });
  }

  newEditTask(newEditedTask: Task | {}): void {
    const dialogRef = this.dialog.open(NewEditTaskFormComponent, {
      width: '400px',
      data: newEditedTask,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.id) {
          this.taskService.updateTask(result).subscribe((result) => {
            this.loadTasks();
            this.snackBar.open('Tarea actualizada', undefined, {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: this.durationInSeconds * 1000,
            });
          });
        } else {
          delete result.id; //no enviar id
          this.taskService.saveTask(result).subscribe((result) => {
            this.loadTasks();
            this.snackBar.open('Tarea creada', undefined, {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: this.durationInSeconds * 1000,
            });
          });
        }
      }
    });
  }

  deleteTask(taskToDelete: Task): void {
    // Delete task using TaskService
    const dialogRef = this.dialog.open(DeleteTaskFormComponent, {
      width: '400px',
      data: taskToDelete,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.taskService.deleteTask(result).subscribe((result) => {
        this.snackBar.open('Tarea borrada', undefined, {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        });
        this.loadTasks();
      })
    });
  }

  // Handle the task drop event
  onTaskDrop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const updatedTask = { ...event.item.data, status: event.container.id } as Task;
      const transferredTask: Task = event.previousContainer.data[event.previousIndex];
      transferredTask.status = event.container.id === 'PENDIENTE' ? 'PENDIENTE' : 'COMPLETO';
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.taskService.updateTask(updatedTask).subscribe((result) => {
        this.snackBar.open('Tarea actualizada', undefined, {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        });
      });
    }
  }
}
