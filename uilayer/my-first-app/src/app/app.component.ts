import { Component, OnInit } from '@angular/core';
import { Course } from './models/course';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular session!!';

  courses: Array<Course> = []

  constructor(private http: HttpClient){

  }


  ngOnInit(){
    console.log('Initialization...')
    this.http.get('http://localhost:4200/assets/dummy.json')
    .subscribe((res: Array<Course>)=> {
      console.log(res)
      this.courses = res;
    })
  }
}
