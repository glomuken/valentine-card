import { Routes } from '@angular/router';
import { GreetingCardComponent } from './greeting-card/greeting-card.component';

export const routes: Routes = [
  { path: '', redirectTo: 'greeting-card', pathMatch: 'full' },
  { path: 'greeting-card', component: GreetingCardComponent }
];