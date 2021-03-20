import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ApplyCoursesComponent } from './apply-courses/apply-courses.component';
import { ListOfCoursesComponent } from './list-of-courses/list-of-courses.component';

// Constants
import {
  APPLY_FOR_COURSES_PATH,
  VIEW_ALL_COURSES_PATH,
} from '../common/constants';

const routes: Routes = [
  {
    path: APPLY_FOR_COURSES_PATH,
    component: ApplyCoursesComponent,
  },
  {
    path: VIEW_ALL_COURSES_PATH,
    component: ListOfCoursesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
