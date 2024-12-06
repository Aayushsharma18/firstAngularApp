import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  div1hide: boolean = true;

  showDiv() {
    this.div1hide = true;
  }

  hideDiv() {
    this.div1hide = false;
  }
}
