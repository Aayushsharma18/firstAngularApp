import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressbarComponent } from "../../resuable-components/progressbar/progressbar.component";

@Component({
  selector: 'app-admin',
  imports: [RouterLink, ProgressbarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
