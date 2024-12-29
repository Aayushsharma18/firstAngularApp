import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api',
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})

export class APIComponent {

  userList: any[] = [];
  productList: any[] = [];

  constructor(private http: HttpClient) {

  }

  getUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((response: any) => {
      this.userList = response;
      console.log(this.userList);

    });
  };

  getProducts() {
    this.http.get("https://fake-store-api.mock.beeceptor.com/api/products").subscribe((response: any) => {
      this.productList = response;
      console.log(this.productList);

    });
  }
}
