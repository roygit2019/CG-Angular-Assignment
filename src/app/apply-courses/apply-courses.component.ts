import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// GlobalStore
import { GlobalStoreService } from './../global-store.service';

// Model
import { TraineesModel } from './../../models/trainees.model';

// Constants
import { VIEW_ALL_COURSES_PATH } from '../../common/constants';

@Component({
  selector: 'app-apply-courses',
  templateUrl: './apply-courses.component.html',
  styleUrls: ['./apply-courses.component.css'],
})
export class ApplyCoursesComponent implements OnInit {
  traineeName: string = '';
  joiningDate: string = '';
  courseDate: string = '';
  courseName: string = '';

  errors: string[] = [];
  constructor(
    private globalStore: GlobalStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  isFormValid() {
    const errorList: string[] = [];
    if (!this.traineeName) {
      errorList.push('Trainee Name Required!');
    }
    if (!this.courseName) {
      errorList.push('Course Name Required!');
    }
    if (!this.joiningDate) {
      errorList.push('Joining Date Required!');
    }
    if (!this.courseDate) {
      errorList.push('Course Date Required!');
    }

    if (this.courseDate && this.joiningDate) {
      const joiningDate = new Date(this.joiningDate);
      const courseDate = new Date(this.courseDate);

      if (joiningDate.getTime() > courseDate.getTime()) {
        errorList.push('Joining date cannot be greater than course date.');
      }
    }

    if (errorList.length) {
      this.errors = errorList;
      return false;
    }
    this.errors = [];
    return true;
  }

  onChange() {
    if (this.errors.length) {
      this.isFormValid();
    }
  }

  checkAndAddData() {
    if (this.isFormValid()) {
      const newTrainee = new TraineesModel(
        this.traineeName,
        this.courseName,
        this.joiningDate,
        this.courseDate
      );

      this.globalStore.addTrainees(newTrainee);
      this.globalStore.showSnackbar(
        `Trainee '${this.traineeName}' added successfully.`
      );
      this.router.navigate([`/${VIEW_ALL_COURSES_PATH}`]);
    }
  }

  getCourses() {
    return this.globalStore.getCourses();
  }
}
