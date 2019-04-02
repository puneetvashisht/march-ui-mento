import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from './services/course.service';

@Component({
    selector: 'add-course',
    template:`
        <h2>Add a Course</h2>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Title</span>
            </div>
        <input #title (blur)="0" type="text" class="form-control" placeholder="Enter Title" aria-label="title" aria-describedby="basic-addon1"/>
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Summary</span>
            </div>
        <input #summary (blur)="0" type="text" class="form-control" placeholder="Enter Summary" aria-label="summary" aria-describedby="basic-addon1"/>
        </div>
        <button type="button" class="btn btn-primary" (click)="addCourse(title.value, summary.value)">Add Course</button>

    `

})
export class AddCourseComponent implements OnInit {

    constructor(private courseService: CourseService) { }

    ngOnInit() { 

    }

    addCourse(title: string, summary: string){
        console.log(title, summary);
        var course = {title, summary}
        this.courseService.addCourse(course)
        .subscribe(res=>console.log(res))
        // http post 
    }

}