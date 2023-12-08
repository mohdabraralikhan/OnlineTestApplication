import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../models/Question';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Answer } from '../models/Answer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  providers: [HttpClient],
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {
  QID: number[] = [];
  Questions: Question[] = [];
  Answers: Answer[] = [];
  constructor(private http: HttpClient, private router: Router) {}
  
  async ngOnInit() {
    await this.getQuestions().then((questions) => {
      this.Questions = questions;
    });
  }


  


  async getQuestions(): Promise<Question[]> {
    const response = await this.http.get<any>('/api/questions/' + 8).toPromise();
    return response.map((questionArray: any) => new Question(
      questionArray[0],
      questionArray[1],
      questionArray[2],
      questionArray[3],
      questionArray[4],
      questionArray[5],
      questionArray[6],
      undefined
    ));
  }


   onSubmit() {
     this.Questions.forEach(element => { this.QID.push(element.ID) });
    if (this.Questions.length > 0) {
      this.fetchAndNavigate();
    }

  }
  async fetchAndNavigate() {
    this.Answers = await this.getAnswers();
    this.router.navigate(['/review'], {
      state: {
        questions: this.Questions,
        answers: this.Answers,
      },
    });
  }

  async getAnswers(): Promise<Answer[]> {
    const response = await this.http.get<any>('api/answers/' + this.QID).toPromise();
    return response.map((answer: any) => new Answer(answer[0], answer[1]));
  }

  validate() {
    const notSelected = this.Questions.find((question) => question.selectedOption == undefined);
    if (notSelected)  return true; 
    else return false;
}
}
