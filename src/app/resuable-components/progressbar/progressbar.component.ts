import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  imports: [NgStyle],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.css'
})
export class ProgressbarComponent {
  //This is a reusable progress bar component that can be used in other components.
  //It takes a progress value as input and displays a progress bar with that value.
  // <progressbar [progressValue]="40"></progressbar>
  @Input() progressValue: number = 0;
}
