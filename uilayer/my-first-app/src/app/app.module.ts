import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {HttpClientModule} from '@angular/commom/http'
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router'


import { AppComponent } from './app.component';
import { BadgeComponent } from './badge.component';
import { CardComponent } from './card.component';
import { CountryComponent } from './components/country.component';
import { CityComponent } from './components/city.component';
import { AddCourseComponent } from './addcourse.component';
import { CourseService } from './services/course.service';
// import { ViewCompileResult } from '@angular/compiler/src/view_compiler/view_compiler';
import { AddComponent } from './components/add.component';
import { ViewComponent } from './components/view.component';


const appRoutes: Routes = [
  { path: '', component: ViewComponent },
  { path: 'add',component: AddCourseComponent }
]

@NgModule({
  declarations: [
    AppComponent, BadgeComponent,CardComponent, CountryComponent, CityComponent, AddCourseComponent, AddComponent, ViewComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
