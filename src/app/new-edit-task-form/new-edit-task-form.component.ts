import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../models/task.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-edit-task-form',
  templateUrl: './new-edit-task-form.component.html',
  styleUrls: ['./new-edit-task-form.component.scss'],
})
export class NewEditTaskFormComponent {
  newEditForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<NewEditTaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public task: Task,
    private formBuilder: FormBuilder) {

    this.newEditForm = this.formBuilder.group({
      id: task.id,
      title: [task.title, [Validators.required]],
      desc: [task.desc, Validators.required],
      status: [task.status, Validators.required],
    });
  }

  ngOnChanges(): void {
    this.newEditForm.patchValue(this.task);
  }

  onSubmit(): void {
    if (this.newEditForm.valid) {
      this.dialogRef.close(this.newEditForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
