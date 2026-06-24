import { DatePipe, JsonPipe, NgClass, NgStyle, SlicePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-attribute-dir',
  imports: [NgClass, NgStyle, UpperCasePipe, SlicePipe, JsonPipe, DatePipe],
  templateUrl: './attribute-dir.html',
  styleUrl: './attribute-dir.css',
})
export class AttributeDir implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  textClassName = signal<string>("");
  isDivGreen: boolean = false;
  firstName: string = "Sandipan";
  courseName: string = "Angular 20";
  rollNo: number[] = [12, 13, 14, 15, 16, 17, 18, 19, 20]
  studentObj: any = {
    name: "Sandipan",
    city: "Kumarghat",
    state: "TR"
  };
  currentDate: Date = new Date();

  constructor() {

  }

  ngOnInit(): void {
    console.log("ngOnInit");
    //to trigger api call
    //to subscribe
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    //to deal with viewChild
    //to subscribe
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
    //unsubscribe
    //restrict user from doing something
  }

  setBgClass(className: string) {
    this.textClassName.set(className);
  }
  toggleBg() {
    this.isDivGreen = !this.isDivGreen
  }
}
