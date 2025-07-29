import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //hardcoded user credentials. for this we will create login object and bind it with form tamplate i.e [(ngModel)].
  login: any = { //do not change variable names as they are used in the apiobj as well.
    EmailId: '',
    Password: ''
  };


  // DI Service Inections:
  router = inject(Router);
  http = inject(HttpClient);


  // apiurl: string = "https://projectapi.gerasim.in/api/UserApp/login";

  onLogin() {

    /* 1. User Login with hardcoded credentials */
    // if (this.login.username == "admin" && this.login.password == "admin@123") {
    //   // Navigate to admin page if credentials are correct
    //   // alert('Login Successful');
    //   this.router.navigateByUrl('/home');
    // }
    // else {
    //   alert('Wrong Credentials');
    // }

    /* 2. User Login with api authentication */
    /* Note: the test API that we are using are private from the owner and applied CORS. 
    that's why we are getting the CORS error. */
    const headers = new HttpHeaders({
      'accept': '*/*',
      'Content-Type': 'application/json-patch+json'
    });

    debugger;
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.login, { headers }).subscribe((res: any) => {
      if (res.result) {

        localStorage.setItem('UserId', res.data.userId);
        localStorage.setItem('Token', res.data.token);
        this.router.navigateByUrl('/home');

      } else {

        alert(res.message || 'Login failed');
      }
    },
      (error) => {
        console.error(error);
        alert('Login failed or CORS issue');
      }
    );
  }

  onLogOff() {
    // Clear local storage and navigate to login page. for LogOut button.
    localStorage.removeItem('UserId');
    localStorage.removeItem('Token');
    this.router.navigateByUrl('/login');
  }


}
