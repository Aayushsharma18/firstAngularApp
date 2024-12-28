import { CommonModule } from '@angular/common';
import { publishFacade } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingHarness } from '@angular/router/testing';
import { zip } from 'rxjs';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})

export class TemplateFormComponent {

  userObj: User = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zipCode: '',
    IsTermAgreed: false

  };
  OnSave() {
    const formValue = this.userObj;
  }
}

class User {

  constructor(firstName: string, lastName: string, userName: string, city: string, state: string, zipcode: string, IsTermAgreed: boolean) {
    this.firstName = firstName,
      this.lastName = lastName,
      this.userName = userName,
      this.city = city,
      this.state = state,
      this.zipCode = zipcode,
      this.IsTermAgreed = IsTermAgreed
  }

  firstName: string;
  lastName: string;
  userName: string;
  city: string;
  state: string;
  zipCode: string;
  IsTermAgreed: boolean;


}
