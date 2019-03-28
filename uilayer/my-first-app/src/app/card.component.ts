import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'my-card',
    template: `
    
    <div class="card" style="width: 18rem;">
  <img src="https://via.placeholder.com/120" class="card-img-top" alt="No Image Found!!">
    <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <p class="card-text">Total votes: {{totalVotes}} - {{summary}} </p>
        <my-badge caption="Votes" count="0" (countIncremented)="handleCountIncrement($event)"></my-badge>
    </div>
    </div>
    
    `
})
export class CardComponent implements OnInit {

    @Input('title') title: string;
    @Input('summary') summary: string;

    totalVotes: number = 0;


    handleCountIncrement(newcount: number){
        console.log('To handle count increment event in the parent', newcount)
        this.totalVotes = newcount
    }

    constructor() { }

    ngOnInit() { 

    }

}