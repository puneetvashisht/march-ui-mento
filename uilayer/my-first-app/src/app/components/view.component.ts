import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';

@Component({
    selector: 'my-view',
    template: `
     <h2>View Component</h2>

     <div class="row">
        <my-card *ngFor="let course of courses" [title]="course.title" [summary]="course.summary"></my-card> 
    </div>
    `
})
export class ViewComponent implements OnInit {

    courses: Array<Course> = []

    constructor(private courseService: CourseService){
  
    }
  
    ngOnInit(){
      console.log('Initialization...')
      this.courseService.fetchAllCourses()
      .subscribe((res: Array<Course>)=> {
        console.log(res)
        this.courses = res;
      })
  
    }

}