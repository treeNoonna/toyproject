import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, HomeComponent , CommonModule, RouterOutlet, NzButtonModule, NzIconModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  router = inject(Router);

  goToMain(){
    this.router.navigate(['main/home']);
  }

}
