import { Component, OnInit } from '@angular/core';

import { GlobalStoreService } from '../global-store.service';

@Component({
  selector: 'app-list-of-courses',
  templateUrl: './list-of-courses.component.html',
  styleUrls: ['./list-of-courses.component.css'],
})
export class ListOfCoursesComponent implements OnInit {
  headers = ['Trainee Name', 'Course Name', 'Joining Date', 'Course Date'];
  constructor(private globalStore: GlobalStoreService) {}

  ngOnInit(): void {}

  getTrainees() {
    return this.globalStore.getTrainees();
  }

  getSnackbar() {
    return this.globalStore.getSnackbarDetail();
  }
}
