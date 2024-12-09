import { Component, linkedSignal, signal } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-signal-component',
  imports: [],
  templateUrl: './signal-component.component.html',
  styleUrl: './signal-component.component.css'
})

export class SignalComponentComponent {

  constructor() {
    setTimeout(() => {
      this.course = "Python";
      this.firstName.set("Ajay");
    }, 2000);

  }

  firstName = signal("Akash");
  lastName = signal("Chopra");
  course: string = "Angular";
  counter = signal<number>(0);


  fullName = linkedSignal({
    source: this.firstName,
    computation: (newVal, preVal) => {

      const fullName = newVal + ' ' + this.lastName()
      return fullName;
    }
  });

  user = signal({ id: 101, name: "Amar" });

  email = linkedSignal({
    source: this.user,
    computation: (user: { name: any; id: any; }) => `${user.name + user.id}@gmail.com`,
    equal: (a: any, b: any) => a.id !== b.id
  });

  OnCounterIndrease() {
    this.counter.update(oldVal => oldVal + 1);
  }

  OnChangeName() {
    this.firstName.set("Aman");
    this.lastName.set("Gupta");
  }

  OnChangeId() {
    this.user.set({ id: 123, name: "Amar" });
  }
}
