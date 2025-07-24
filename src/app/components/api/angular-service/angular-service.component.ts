import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularserviceService } from '../../../Services/angularservice.service';

@Component({
  selector: 'app-angular-service',
  imports: [FormsModule],
  templateUrl: './angular-service.component.html',
  styleUrl: './angular-service.component.css'
})
export class AngularServiceComponent {

  //inject the service in the construactor.
  constructor(private _service: AngularserviceService) {
    // this.getAllComments();
    this.getAllcommentsFromService(); //service method call
  }
  url: string = "url";
  http = inject(HttpClient);

  commentlist: any[] = [];
  count: number = 0;
  comment: any = {
    "id": 0,
    "userId": 0,
    "title": "",
    "body": ""
  };


  //api calls from component [regular practice]
  resetForm() {
    this.comment = {}
  };

  // getAllComments() {
  //   this.http.get(url).subscribe((res: any) => {
  //     this.commentlist = res;
  //     this.count = Array.isArray(res) ? res.length : 0;
  //     console.log(this.commentlist);
  //   });
  // };

  // saveComment() {
  //   this.http.post("url", this.comment).subscribe((res: any) => {
  //     if (res) {
  //       // debugger;
  //       alert("Comment Created Successfully");
  //       // this.getAllComments();
  //       this.getAllcommentsFromService(); //service method call
  //       this.resetForm(); //reset form after saving
  //     }
  //     else {
  //       alert("Failed to create comment");
  //     }
  //   });
  // };

  saveCommentWithService() {
    this._service.saveComment(this.comment)
      .subscribe((res: any) => {
        if (res) {
          // debugger;
          alert("Comment Created Successfully");
          // this.getAllComments();
          this.getAllcommentsFromService(); //service method call
          this.resetForm(); //reset form after saving
        }
        else {
          alert("Failed to create comment");
        }
      })
  }

  editComment(data: any) {
    this.comment = data;
  }

  updateComment() {
    this.http.put(this.url + "/" + this.comment.id, this.comment).subscribe((res: any) => {
      if (res.result) {
        alert("Comment updated Successfully");
        // this.getAllComments();
        this.getAllcommentsFromService(); //service method call
        this.resetForm(); //reset form after updating
      }
      else {
        alert(res.message);
      }
    });
  };

  deleteComment(id: number) {
    const isDelete = confirm("Are you sure you want to delete this comment?");
    if (isDelete) {
      this.http.delete(this.url + "/" + id).subscribe((res: any) => {
        if (res) {
          alert("Comment deleted Successfully");
          // this.getAllComments();
          this.getAllcommentsFromService(); //service method call
        }
        else {
          alert("Failed to delete comment");
        }
      });
    }
  };

  //api calls from service [recommended practice]
  getAllcommentsFromService() {
    this._service.loadComments()
      .subscribe((res: any) => { // this._service.loadComments() returns an observable
        this.commentlist = res;
        this.count = Array.isArray(res) ? res.length : 0;
      });
  };
}
