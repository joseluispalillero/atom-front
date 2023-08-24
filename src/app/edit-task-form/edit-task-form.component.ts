import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-edit-task-form',
  templateUrl: './edit-task-form.component.html',
  styleUrls: ['./edit-task-form.component.scss'],
})
export class EditTaskFormComponent {
  @Input() task!: Task;
  @Output() save = new EventEmitter<Partial<Task>>();
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.editForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      desc: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  ngOnChanges(): void {
    this.editForm.patchValue(this.task);
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      this.save.emit(this.editForm.value);
    }
  }
}
