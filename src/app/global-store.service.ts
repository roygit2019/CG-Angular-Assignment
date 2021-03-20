import { Injectable } from '@angular/core';

// Model
import { TraineesModel } from '../models/trainees.model';

@Injectable({
  providedIn: 'root',
})
export class GlobalStoreService {
  constructor() {}
  courses: any[] = [
    { value: 'MEAN', text: 'MEAN' },
    { value: 'MERN', text: 'MERN' },
    { value: 'Vue', text: 'Vue' },
  ];
  trainees: TraineesModel[] = [
    new TraineesModel('Ram', 'MEAN', '2020-5-18', '2020-5-27'),
    new TraineesModel('Sam', 'MERN', '2020-5-18', '2020-5-27'),
    new TraineesModel('Jim', 'Vue', '2020-5-18', '2020-5-27'),
  ];

  snackbar = {
    isVisible: false,
    message: '',
  };

  timeout: any = null;

  getTrainees() {
    return this.trainees;
  }

  getCourses() {
    return this.courses;
  }

  addTrainees(trainee: TraineesModel) {
    this.trainees.push(trainee);
  }

  showSnackbar(message: string) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      this.snackbar.isVisible = false;
    }, 5000);

    this.snackbar = {
      isVisible: true,
      message,
    };
  }

  getSnackbarDetail() {
    return this.snackbar;
  }
}
