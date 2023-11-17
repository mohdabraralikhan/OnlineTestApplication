import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../models/Question';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
import {  FormsModule } from '@angular/forms';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './test.component.html',
  providers:[HttpClient],
  styleUrl: './test.component.css'
})
export class TestComponent {

  Questions: Question[] = [];
  pageable: any;
  constructor(private http: HttpClient) {
    this.getQuestions().subscribe(
      (response: any) => {
        if (response.content && Array.isArray(response.content)) {
          this.Questions = response.content.map((questionArray: any) => {
            return new Question(
              questionArray[0],
              questionArray[1],
              questionArray[2],
              questionArray[3],
              questionArray[4],
              questionArray[5],
              questionArray[6],
              undefined
            );
          });
            console.log(this.Questions)
        } else {
          alert("'Error fetching data'");
          console.error('Invalid response:', response);
        }
      },
      (error: any) => {
        alert("'Error fetching data")
        console.log('Error fetching data:', error)
      }
    );
  }
  onSubmit() { }

  getQuestions() {return this.http.get<any>('/api/questions/' + 12);}

}
