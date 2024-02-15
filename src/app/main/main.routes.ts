import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';

export const mainRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'home', component : HomeComponent}
];
