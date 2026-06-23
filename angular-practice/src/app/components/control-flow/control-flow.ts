import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isVisible: boolean = true;
  monthName: string = ""
  cityName: string[] = ["Kumarghat", "Agartala", 'Aizawl'];
  studentDetails: any[] = [
    {name: "Sandipan", city: "Kumarghat", isActive: true},
    {name: "Kalyanjit", city: "Agartala", isActive: false},
    {name: "Rwngthung", city: "Aizawl", isActive: false},
  ]
  showPara() {
    this.isVisible = true;
  }
  hidePara() {
    this.isVisible = false;
  }
}
