import { Component, OnInit } from '@angular/core';
import { Course } from './models/course';
import { HttpClient } from '@angular/common/http';
import { CourseService } from './services/course.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular session!!';

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
