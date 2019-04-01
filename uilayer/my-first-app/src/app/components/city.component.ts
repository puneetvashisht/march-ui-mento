import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-city',
    template: `
        <h2>City Component</h2>
        <p>Country selected in parent: {{name}}</p>


        <select #c (change)="handleCityChange($event)">
        <option  *ngFor="let city of cities">{{city}}</option>
        </select>
    `
})
export class CityComponent implements OnInit {


    @Input('name') name: string;
    @Output('citySelected') citySelected : EventEmitter<string> = new EventEmitter();
    constructor() { }

    cities: Array<string> = ['Delhi', 'New York', 'Tel Aviv', 'Tokyo']
    handleCityChange(event){
        console.log(event.target.value);
        this.citySelected.emit(event.target.value)
    }

    ngOnInit() { 

    }
    

}