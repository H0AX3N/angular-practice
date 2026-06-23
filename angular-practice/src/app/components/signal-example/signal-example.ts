import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  imports: [],
  templateUrl: './signal-example.html',
  styleUrl: './signal-example.css',
})
export class SignalExample {
  firstName: string = "Sandipan";
  courseName = signal<string>("Angular");
  courseDuration = signal<string>("30 videos")
  courseDetails = computed(() => "The course name is " + this.courseName() + " and it will be going on for " + this.courseDuration());
  constructor() {

  }
}
