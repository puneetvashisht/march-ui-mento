import { Component } from '@angular/core';

@Component({
    selector: 'my-badge',
    template: `
    <h2>{{title}}</h2>
    <button (click)="reverse()" >Reverse Text</button>
    
    `
})
export class BadgeComponent{

    title: string = 'My Badge Component!!'

    reverse(){
        console.log(this.title)
        this.title = this.title.split('').reverse().join('');
    }

}