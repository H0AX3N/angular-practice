import { Component, signal } from '@angular/core';
import { AddEmployee } from './components/add-employee/add-employee';
import { EmployeeList } from './components/employee-list/employee-list';
import { EmployeeNames } from './components/employee-names/employee-names';
import { DataBinding } from './components/data-binding/data-binding';
import { StructuralDir } from './components/directives/structural-directives/structural-dir/structural-dir';
import { SignalExample } from './components/signal-example/signal-example';
import { ControlFlow } from './components/control-flow/control-flow';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AttributeDir } from './components/directives/attribute-dir/attribute-dir';

@Component({
  selector: 'app-root',
  imports: [AddEmployee, EmployeeList, EmployeeNames, DataBinding, StructuralDir, SignalExample, ControlFlow, RouterLink, RouterOutlet, AttributeDir],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-practice');
}

