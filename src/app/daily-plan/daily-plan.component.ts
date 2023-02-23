import { Component, OnInit } from '@angular/core';
import macroData from '../../assets/json/macros.json'

@Component({
  selector: 'app-daily-plan',
  templateUrl: './daily-plan.component.html',
  styleUrls: ['./daily-plan.component.css']
})
export class DailyPlanComponent implements OnInit {

    macro = macroData;

    constructor() { }
    ngOnInit(): void {
    }

    createDailyPlan() {
        let calories = 0;
        let fat = 0;
        let carbs = 0;
        let protein = 0;
        
    }
}

