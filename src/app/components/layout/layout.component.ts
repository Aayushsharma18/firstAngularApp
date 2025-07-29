import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterLinkActive, CommonModule, NgStyle, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {


  constructor(private router: Router) { }

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
