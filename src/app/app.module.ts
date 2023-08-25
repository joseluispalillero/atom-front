import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterStatusPipe } from './pipes/filter-status.pipe';
import { TaskBoardComponent } from './task-board/task-board.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { NewEditTaskFormComponent } from './new-edit-task-form/new-edit-task-form.component';
import { DeleteTaskFormComponent } from './delete-task-form/delete-task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterStatusPipe,
    TaskBoardComponent,
    TaskCardComponent,
    NewEditTaskFormComponent,
    DeleteTaskFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
