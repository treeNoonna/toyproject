import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { HeaderComponent } from '../header/header.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { DinerListComponent } from '../map/diner-list/diner-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DinerListComponent, MapComponent, HeaderComponent, NzLayoutModule, NzBreadCrumbModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
