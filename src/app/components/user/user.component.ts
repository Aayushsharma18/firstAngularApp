import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressbarComponent } from "../../resuable-components/progressbar/progressbar.component";

@Component({
  selector: 'app-user',
  imports: [RouterLink, ProgressbarComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
