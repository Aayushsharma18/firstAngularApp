import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularserviceService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "https://jsonplaceholder.typicode.com/posts";

  loadComments() {
    return this.http.get(this.apiUrl);
  }

  saveComment(data: any) {
    return this.http.post(this.apiUrl, data);
  }

}
