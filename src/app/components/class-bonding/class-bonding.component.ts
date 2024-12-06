import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-class-bonding',
  imports: [CommonModule, FormsModule],
  templateUrl: './class-bonding.component.html',
  styleUrl: './class-bonding.component.css'
})

export class ClassBondingComponent {

  div1Color: string = "bg-success";
  isChecked: boolean = true;
  div3Color: string = "";
  div4Color: string = "";

  myCss: any = {
    'background-color': 'red',
    'border': '2px solid black',
    'border-radius': '20px',
    'width': '200px',
    'height': '100px',
  }

  addPrimarycolor(bgClassName: string) {
    this.div1Color = bgClassName;
  }

  addDangercolor(bgClassName: string) {
    this.div1Color = bgClassName;
  }

  addGreenColor(color: string) {
    this.div4Color = color;
  }

  addBlueColor(color: string) {
    this.div4Color = color;
  }
}
