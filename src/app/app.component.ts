import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdminComponent } from "./components/admin/admin.component";
import { UserComponent } from "./components/user/user.component";
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { ClassBondingComponent } from "./components/class-bonding/class-bonding.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, DataBindingComponent, ClassBondingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstAngularApp';
}
