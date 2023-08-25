import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditTaskFormComponent } from './new-edit-task-form.component';

describe('EditTaskFormComponent', () => {
  let component: NewEditTaskFormComponent;
  let fixture: ComponentFixture<NewEditTaskFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEditTaskFormComponent]
    });
    fixture = TestBed.createComponent(NewEditTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
