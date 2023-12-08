import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ReviewComponent } from './review/review.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [

      {path:'',redirectTo:'quiz',pathMatch:'full'},
      { path: 'quiz', component: TestComponent },
      { path: 'review', component: ReviewComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
  { path: '404', component: PageNotFoundComponent }

];

