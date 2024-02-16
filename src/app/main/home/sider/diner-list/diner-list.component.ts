import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-diner-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './diner-list.component.html',
  styleUrl: './diner-list.component.css'
})
export class DinerListComponent {

  items! : any;

  @Input() response: any[] = [];
}
