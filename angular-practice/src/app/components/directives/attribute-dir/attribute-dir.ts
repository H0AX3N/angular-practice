import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-attribute-dir',
  imports: [NgClass, NgStyle],
  templateUrl: './attribute-dir.html',
  styleUrl: './attribute-dir.css',
})
export class AttributeDir {
  textClassName = signal<string>("");
  isDivGreen: boolean = false;
  setBgClass(className: string) {
    this.textClassName.set(className);
  }
  toggleBg() {
    this.isDivGreen = !this.isDivGreen
  }
}
