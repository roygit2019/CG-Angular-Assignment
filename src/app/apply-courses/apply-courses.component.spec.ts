import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCoursesComponent } from './apply-courses.component';

describe('ApplyCoursesComponent', () => {
  let component: ApplyCoursesComponent;
  let fixture: ComponentFixture<ApplyCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
