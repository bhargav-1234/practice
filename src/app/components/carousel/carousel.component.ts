import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  array = ["hi how are you", "Bhargav", 3, 4];
  effect = "scrollx";
  constructor() {}

  ngOnInit() {}
}
