import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-class-bonding',
  imports: [CommonModule],
  templateUrl: './class-bonding.component.html',
  styleUrl: './class-bonding.component.css'
})
export class ClassBondingComponent {

  div1Color: string = "bg-success";
}
