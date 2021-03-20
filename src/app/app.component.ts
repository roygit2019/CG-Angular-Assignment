import { Component } from '@angular/core';

// Constants
import { ROUTES_PATH } from '../common/constants';

// Model
import { TraineesModel } from '../models/trainees.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  paths = ROUTES_PATH;
  trainees: TraineesModel[] = [
    new TraineesModel('Ram', 'MERN', '2020-5-18', '2020-5-27'),
    new TraineesModel('Sam', 'MERN', '2020-5-18', '2020-5-27'),
    new TraineesModel('Jim', 'Vue', '2020-5-18', '2020-5-27'),
  ];
}
