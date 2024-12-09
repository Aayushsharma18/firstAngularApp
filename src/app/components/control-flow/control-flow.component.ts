import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [CommonModule, FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  div1hide: boolean = true;
  isChecked: boolean = true;
  day: string = "";
  cityList: string[] = ["Surat", "Ahmedbad", "Pune", "Jaipur", "Rajkot"];
  selectedCity: string = "select city";
  value: string = "";


  showDiv() {
    this.div1hide = true;
  }

  hideDiv() {
    this.div1hide = false;
  }
}
