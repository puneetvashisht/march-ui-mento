import { Component } from '@angular/core';
import { Course } from './models/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular session!!';

  courses: Array<Course> = [
    {title: "Angular", summary: "Framework from Google!!"},
    {title: "React", summary: "Library from facebook!!"},
    {title: "EmberJS", summary: "Another open source UI frameowrk"},
    {title: "JS", summary: "Base Programming language"}
  ]
}
