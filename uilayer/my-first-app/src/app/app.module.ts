import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BadgeComponent } from './badge.component';
import { CardComponent } from './card.component';
import { CountryComponent } from './components/country.component';
import { CityComponent } from './components/city.component';

@NgModule({
  declarations: [
    AppComponent, BadgeComponent,CardComponent, CountryComponent, CityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
