import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";


export const appRoutes: Routes = [
  { path: '',  children: [
  { path: '', redirectTo : 'main', pathMatch: 'full'},
  { path: 'main', loadChildren: () => import('./main/main.routes').then(m => m.mainRoutes)}
  ]}
]
/*   { path: '**', component: NotFoundComponent } */

