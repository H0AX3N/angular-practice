import { Component, signal } from '@angular/core';
import { AddEmployee } from './components/add-employee/add-employee';
import { EmployeeList } from './components/employee-list/employee-list';
import { EmployeeNames } from './components/employee-names/employee-names';
import { DataBinding } from './components/data-binding/data-binding';

@Component({
  selector: 'app-root',
  imports: [AddEmployee, EmployeeList, EmployeeNames, DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-practice');
}

