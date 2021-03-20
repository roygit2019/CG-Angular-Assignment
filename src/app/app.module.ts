import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfCoursesComponent } from './list-of-courses/list-of-courses.component';
import { ApplyCoursesComponent } from './apply-courses/apply-courses.component';

import { GlobalStoreService } from './global-store.service';

@NgModule({
  declarations: [AppComponent, ListOfCoursesComponent, ApplyCoursesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [GlobalStoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
