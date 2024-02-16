import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'app-personal-space',
  standalone: true,
  templateUrl: './personal-space.component.html',
  styleUrl: './personal-space.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [

  ]
})
export class PersonalSpaceComponent {

}
