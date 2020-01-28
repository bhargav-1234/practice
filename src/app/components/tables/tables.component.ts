import { Component, OnInit, Input } from "@angular/core";
import { Data } from "../../entities/table";
@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
  styleUrls: ["./tables.component.css"]
})
export class TablesComponent implements OnInit {
  @Input()
  data: Data;

  constructor() {
    this.data = new Data();
  }
  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  listOfDisplayData: Data[] = [];
  listOfAllData: Data[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;

  currentPageDataChange($event: Data[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(
      item => this.mapOfCheckedId[item.id]
    );
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.listOfAllData.filter(
      item => this.mapOfCheckedId[item.id]
    ).length;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(
      item => (this.mapOfCheckedId[item.id] = value)
    );
    this.refreshStatus();
  }

  operateData(): void {
    this.isOperating = true;
    setTimeout(() => {
      this.listOfAllData.forEach(
        item => (this.mapOfCheckedId[item.id] = false)
      );
      this.refreshStatus();
      this.isOperating = false;
    }, 1000);
  }

  ngOnInit(): void {
    this.listOfAllData.push(
      {
        id: 1,
        name: "Bhargav",
        age: 21,
        address: " Dff"
      },
      {
        id: 2,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 3,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 4,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 5,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 6,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 7,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 8,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 9,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 10,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 11,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 12,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 13,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 14,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 15,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 16,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 17,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 18,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 19,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 20,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 21,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 22,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 23,
        name: "Bhargav",
        age: 32,
        address: " Dff"
      },
      {
        id: 24,
        name: "Bhargav",
        age: 21,
        address: " Dff"
      }
    );
  }
}
