import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements OnInit {

  // @Input() tabList: string[] = ['CityList', 'Employee Table']; // Default value if not provided
  // This allows the parent component to pass a list of tab names
  // and the component will render buttons for each tab.
  @Input() tabList: string[] = [];

  @Output() onTabClick = new EventEmitter<string>(); //now this variable has become an event emitter  
  // This will emit the name of the tab when clicked.
  // This allows the parent component to listen for tab click events.

  currentTab: string = ''; // To keep track of the currently selected tab

  ngOnInit(): void {

    this.currentTab = this.tabList[0];
  }

  // Method to handle tab click events
  onTabClicked(tabName: string) {

    this.currentTab = tabName; // Update the current tab

    // Emit the tab name to the parent component
    this.onTabClick.emit(tabName);
  }


}
