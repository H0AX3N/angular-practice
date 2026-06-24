import { Routes } from '@angular/router';
import { AddEmployee } from './components/add-employee/add-employee';
import { SignalExample } from './components/signal-example/signal-example';
import { ControlFlow } from './components/control-flow/control-flow';
import { AttributeDir } from './components/directives/attribute-dir/attribute-dir';

export const routes: Routes = [
  {
    path: 'add-employee',
    component: AddEmployee,
  },
  {
    path: 'signal',
    component: SignalExample,
  },
  {
    path: 'control-flow',
    component: ControlFlow,
  },
  {
    path: 'attribute-dir',
    component: AttributeDir,
  }
];
