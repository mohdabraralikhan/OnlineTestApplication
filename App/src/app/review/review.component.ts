import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Question } from '../models/Question';
import { Answer } from '../models/Answer';


@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  questions: Question[] = [];
  answers: Answer[] = [];

  constructor(private location: Location) {
    const state: any = location.getState();
    this.questions = state.questions;
    this.answers = state.answers;
    console.log(this.answers, this.questions);
  }


  getAnswer(id: number): string | undefined {
    const matchingAnswer = this.answers.find((answer) => answer.ID == id);
    if (matchingAnswer) {
      console.log(matchingAnswer.CorrectOption);
      return matchingAnswer.CorrectOption;
    }
    return undefined;
  }
  getResult() {
    let correctAnswers = 0;
    for (const question of this.questions) {
      if (question.selectedOption === this.getAnswer(question.ID)) {
        correctAnswers++;
      }
    }
    console.log(correctAnswers.toString() + "/" + this.questions.length.toString());
    return correctAnswers.toString() + "/" + this.questions.length.toString();
}
}




