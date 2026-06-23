import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-dir',
  imports: [CommonModule],
  templateUrl: './structural-dir.html',
  styleUrl: './structural-dir.css',
})
export class StructuralDir {
  isVisible: boolean = true;

  constructor() {

  }

  showBlock1() {
    this.isVisible = true;
  }
  hideBlock1() {
    this.isVisible = false;
  }

}
