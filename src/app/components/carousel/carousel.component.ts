import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  array = [
    "https://wegotthiscovered.com/wp-content/uploads/2019/06/Spider-Man-Far-From-Home-3.jpg",
    "https://wegotthiscovered.com/wp-content/uploads/2019/06/Spider-Man-Far-From-Home-3.jpg",
    3,
    4
  ];
  effect = "scrollx";
  constructor() {}

  ngOnInit() {}
}
