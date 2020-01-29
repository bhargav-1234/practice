import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-radio",
  templateUrl: "./radio.component.html",
  styleUrls: ["./radio.component.css"]
})
export class RadioComponent implements OnInit {
  radioValue = "A";
  options = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange" },
    { label: "Bhargav", value: "Bhargav" },
    { label: "sai kiran", value: "sai kiran" },
    { label: "sai", value: "sai" },
    { label: "pavan", value: "pavan" },
    { label: "narendra", value: "narendra" }
  ];

  options2 = [
    { label: "hi", value: "hi" },
    { label: "hello", value: "hello" },
    { label: "Om", value: "Om" },
    { label: "Bhagi", value: "Bhagi" },
    { label: "sam", value: " sam" },
    { label: "sailu", value: "sailu" },
    { label: "pavani", value: "pavani" },
    { label: "nani", value: "nani" }
  ];
  constructor() {}

  ngOnInit() {}
}
