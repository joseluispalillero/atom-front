import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { EditTaskFormComponent } from './edit-task-form/edit-task-form.component'; // Import the FilterStatusPipe
import { FilterStatusPipe } from './pipes/filter-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskBoardComponent,
    TaskCardComponent,
    FilterStatusPipe,
    EditTaskFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
