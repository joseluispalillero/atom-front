import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-delete-task-form',
  templateUrl: './delete-task-form.component.html',
  styleUrls: ['./delete-task-form.component.scss']
})
export class DeleteTaskFormComponent {

  constructor(private dialogRef: MatDialogRef<DeleteTaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public task: Task) {
  }

  onDelete(): void {
    this.dialogRef.close(this.task.id);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
