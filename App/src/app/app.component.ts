import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterOutlet,RouterLinkActive, RouterLink } from '@angular/router';
import {  FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers:[TestComponent],
    imports: [CommonModule, RouterOutlet,RouterLink,RouterLinkActive,FormsModule,HttpClientModule]
})
export class AppComponent {
  title = 'App';



}
