import { Component, OnInit } from '@angular/core';
import macroData from '../../assets/json/macros.json'

@Component({
  selector: 'app-day-tracker',
  templateUrl: './day-tracker.component.html',
  styleUrls: ['./day-tracker.component.css']
})
export class DayTrackerComponent implements OnInit {

    macro = macroData;

    constructor() { }
    ngOnInit(): void {
    }

    keyword = "name";
    public countries = [
        {
        id: 1,
        name: 'These are',
        },
        {
        id: 2,
        name: 'test',
        },
        {
        id: 3,
        name: 'data.',
        }
    ];

}
