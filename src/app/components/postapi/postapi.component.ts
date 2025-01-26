import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-postapi',
  imports: [FormsModule],
  templateUrl: './postapi.component.html',
  styleUrl: './postapi.component.css'
})
export class PostapiComponent {

  carlist: any[] = [];
  http = inject(HttpClient);
  car: any = {
    "carId": 0,
    "brand": "",
    "model": "",
    "year": "",
    "color": "",
    "dailyRate": "",
    "carImage": "",
    "regNo": ""
  };


  getAllCars() {
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((res: any) => {
      this.carlist = res.data;
      console.log(this.carlist);

    });
  };

  saveCar() {
    this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar", this.car).subscribe((res: any) => {
      if (res.result) {
        alert("Car Created Successfully");
        this.getAllCars();
      }
      else {
        alert(res.message);
      }
    });
  };

  // this method load data in the text field
  editCar(data: any) {
    this.car = data;
  }

  updateCar() {
    this.http.put("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar", this.car).subscribe((res: any) => {
      if (res.result) {
        alert("Car updated Successfully");
        this.getAllCars();
      }
      else {
        alert(res.message);
      }
    });
  };

  deleteCar(id: any) {
    const isDelete = confirm("Are you sure?");
    if (isDelete) {
      this.http.delete("https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid=" + id).subscribe((res: any) => {
        if (res.result) {
          alert("Car deleted Successfully");
          this.getAllCars();
        }
        else {
          alert(res.message);
        }
      });
    }
  }

}
