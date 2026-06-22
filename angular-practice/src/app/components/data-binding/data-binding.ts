import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  //string, number, boolean, date are the data types
  courseName: string = "Angular 21";
  inputType = "checkbox";
  rollNo: number = 123;
  isTrue: boolean = true;
  currentDate: Date = new Date();
  stateName: string = "Tripura";
  firstName = signal("Sandipan Deb");
  className:string = "bg-red-400 text-white";

  constructor() {

  }

  changeCourseName() {
    this.isTrue = !this.isTrue;
    this.courseName = this.isTrue ? "React JS" : "Angular 21"
  }

  changeFirstName() {
    this.firstName.set("Sagar");
  }

  showAlert(message: string) {
    alert(message);
  }
}
