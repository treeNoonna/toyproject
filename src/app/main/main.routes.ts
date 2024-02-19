import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { PersonalSpaceComponent } from './personal-space/personal-space.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

export const mainRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'home', component : HomeComponent},
  { path: 'personal-space/:id', component: PersonalSpaceComponent},
  { path: 'restaurant/:id', component: RestaurantComponent}
];
