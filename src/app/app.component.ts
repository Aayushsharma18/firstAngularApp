import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AdminComponent } from "./components/admin/admin.component";
import { UserComponent } from "./components/user/user.component";
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { ClassBondingComponent } from "./components/class-bonding/class-bonding.component";
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router) {


  }

  title = 'firstAngularApp';
  linkColor: string = "";

  routerLinkColor(color: string) {
    this.linkColor = color;
  };

  gotoAdmin() {
    this.router.navigateByUrl("/admin");
  };

  gotoUser() {
    this.router.navigateByUrl('/user');
  }
}
