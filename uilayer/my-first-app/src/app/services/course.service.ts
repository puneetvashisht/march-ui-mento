import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';

@Injectable()
export class CourseService {

    baseurl: string = 'http://localhost:3000/courses'
    constructor(private http: HttpClient) { }


    fetchAllCourses() : Observable<any>{
       return this.http.get(this.baseurl)
    }
    addCourse(course: Course) : Observable<any>{
       return this.http.post(this.baseurl, course)
    }
    
    
}