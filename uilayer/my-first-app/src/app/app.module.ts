import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {HttpClientModule} from '@angular/commom/http'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BadgeComponent } from './badge.component';
import { CardComponent } from './card.component';
import { CountryComponent } from './components/country.component';
import { CityComponent } from './components/city.component';
import { AddCourseComponent } from './addcourse.component';


@NgModule({
  declarations: [
    AppComponent, BadgeComponent,CardComponent, CountryComponent, CityComponent, AddCourseComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
