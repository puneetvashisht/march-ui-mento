import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-badge',
    template: `

    <button type="button" class="btn btn-primary" (click)="incrementCount()">
        {{title}} <span class="badge badge-light">{{count}}</span>
    </button>
    
    `
})
export class BadgeComponent{

    @Input('caption')title: string = 'Default!!'
    @Input('count') count: number = 0
    @Output('countIncremented') countIncremented: EventEmitter<number> = new EventEmitter();


    incrementCount(){
        this.count++
        this.countIncremented.emit(this.count);
    }
    reverse(){
        console.log(this.title)
        this.title = this.title.split('').reverse().join('');
    }

}