import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-steps",
  templateUrl: "./steps.component.html",
  styleUrls: ["./steps.component.css"]
})
export class StepsComponent implements OnInit {
  index = 0;
  disable = false;
  onIndexChange(index: number): void {
    this.index = index;
  }
  constructor() {}

  ngOnInit() {}
}
