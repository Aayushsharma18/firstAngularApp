import { CommonModule, DatePipe, JsonPipe, LowerCasePipe, NgFor, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from './na.pipe';

@Component({
  selector: 'app-common-components',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, JsonPipe, DatePipe, NgFor, NaPipe],
  templateUrl: './common-components.component.html',
  styleUrl: './common-components.component.css'
})
export class CommonComponentsComponent {

  //#region
  //This is how we can devide the code into sections
  //#endregion
  courseName: string = 'Angular Development';
  studentObj: any = {
    name: 'Amit',
    age: 20,
    city: 'Delhi',
    country: 'India'
  };

  currentDate: Date = new Date();
  employeeArray: any[] = [
    { name: 'John', age: 30, city: 'New York' },
    { age: 25, city: 'Los Angeles' },
    { name: 'Mike', age: 35, city: 'Chicago' },
    { name: '', age: 28, city: 'Houston' },
    { name: 'Tom', age: 40, city: 'Phoenix' },
    { name: null, age: 22, city: 'Philadelphia' }
  ];
}
