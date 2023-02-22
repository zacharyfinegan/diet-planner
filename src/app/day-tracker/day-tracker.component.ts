import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-tracker',
  templateUrl: './day-tracker.component.html',
  styleUrls: ['./day-tracker.component.css']
})
export class DayTrackerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  keyword = "name";
  public countries = [
    {
      id: 1,
      name: 'Albania',
    },
    {
      id: 2,
      name: 'Belgium',
    },
    {
      id: 3,
      name: 'Denmark',
    }
  ];

}
