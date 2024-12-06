//imports same as usings in c#.
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Component decorater [configuration of the class]
@Component({
  selector: 'app-data-binding',
  imports: [FormsModule, CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})

//class
export class DataBindingComponent {


  constructor() {

    //this will call the function on page load.
    // this.View();
    console.log(this.cityList);
    console.log(this.empArray);

  }

  //properties of the class.
  id: number = 1;
  firstName: string = 'Aaman';
  lastName: string = "gupta"
  isActive: boolean = true;
  currentDate: Date = new Date();
  imageSrc: string = "https://images.ctfassets.net/vztl6s0hp3ro/730j3EU8CMGQShwD1iLV7F/6e1c84839ab12aa03958a33fea129ded/what-is-a-chief-people-officer-and-why-does-it-matter.webp";
  desc: string = "Some quick example text to build on the card title and make up the bulk of the cards content";
  class_bg_color: string = "blue";
  selectedCity: string = "";

  cityList: string[] = ["Surat", "Ahmedbad", "Pune", "Jaipur", "Rajkot"]
  empArray: any[] = [
    { id: 1, fname: "Raj", lname: "Patel", city: "Surat", contactno: 9999955588 },
    { id: 2, fname: "Rajesh", lname: "Patel", city: "Rajkot", contactno: 9999955588 },
    { id: 3, fname: "Suresh", lname: "Patel", city: "Jaipur", contactno: 9999955588 },
    { id: 4, fname: "Suraj", lname: "Patel", city: "Rajkot", contactno: 9999955588 },
    { id: 5, fname: "Ganesh", lname: "Patel", city: "Jaipur", contactno: 9999955588 },
    { id: 6, fname: "Amit", lname: "Patel", city: "Ahmedbad", contactno: 9999955588 },
  ]
  // hide/show div
  isDivHide: boolean = true;
  divHiddenMsg: string = "";

  num1: number = 0;
  num2: number = 0;

  /* Methods */
  //to call on page load. call it from the constructor.
  View() {
    console.log("VIew Button CLicked.");
  }

  //event binding example
  OnCityClick() {
    console.log("City dropdown  changed.");

  }

  showdiv() {
    this.isDivHide = true;
    this.divHiddenMsg = "Div is showing";
  }

  hidediv() {
    this.isDivHide = false;
    this.divHiddenMsg = "Div is hidden";
  }
}
