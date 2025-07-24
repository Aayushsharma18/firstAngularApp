import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  /**
   *
   */
  constructor() {
    // this.userForm.controls['state'].disable(); //To disable the state field

    /*
        setTimeout(() => {
          this.userForm.controls['state'].enable(); // To enable the state field after 5 seconds
        }, 5000); // Simulating an async operation to enable the state field after 5 seconds
    */

  }
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('Goa', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
    isTermAgreed: new FormControl(false)
  });

  OnUserSave() {
    const userForm = this.userForm.value;
    debugger;
  }
}

class User {

  constructor(firstName: string, lastName: string, userName: string, city: string, state: string, zipcode: string, isTermAgreed: boolean) {
    this.firstName = firstName,
      this.lastName = lastName,
      this.userName = userName,
      this.city = city,
      this.state = state,
      this.zipCode = zipcode,
      this.isTermAgreed = isTermAgreed
  }

  firstName: string;
  lastName: string;
  userName: string;
  city: string;
  state: string;
  zipCode: string;
  isTermAgreed: boolean;
}