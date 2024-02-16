import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [

  ]
})
export class RestaurantComponent {

}
