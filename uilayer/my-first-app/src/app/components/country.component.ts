import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-country',
    template: `
        <h2>Country Component</h2>
        <select #c (change)="0">
            <option  *ngFor="let country of countries">{{country}}</option>
        </select>
        <p>Country selected is : {{c.value}}</p>
        <p>City selected from child component is : {{city}}</p>
        <hr/>

        <my-city [name]="c.value" (citySelected)="handleCitySelected($event)"></my-city>
    `
})
export class CountryComponent implements OnInit {

    constructor() { }

    city: string;
    countries: Array<string> = ['India', 'US', 'Israel', 'Japan']

    ngOnInit() { 

    }

    handleCitySelected(city: string){
        this.city = city
    }

}