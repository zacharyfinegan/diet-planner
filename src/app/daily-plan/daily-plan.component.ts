import { Component, OnInit } from '@angular/core';
import macroData from '../../assets/json/macros.json'

@Component({
  selector: 'app-daily-plan',
  templateUrl: './daily-plan.component.html',
  styleUrls: ['./daily-plan.component.css']
})
export class DailyPlanComponent implements OnInit {

    macro = macroData;
    dailyPlanArray = new Array;
    maxIndex: number = this.macro.foods.length - 1;

    constructor() { }
    ngOnInit(): void {
    }

    getRandInt(maxIndex:number) {
        return Math.floor(Math.random() * (this.maxIndex + 1)) 
    }

    createDailyPlan() {
        let calories = 0;
        let fat = 0;
        let carbs = 0;
        let protein = 0;
        let maxCalories = 2848;
        let maxFat = 81;
        let maxCarbs = 380;
        let maxProtein = 175;

        while (calories < maxCalories) {
            let index = this.getRandInt(this.maxIndex)
            let food = this.macro.foods[index]

            calories += food.Calories;
            fat += food.Fat;
            carbs += food.Carbs;
            protein += food.Protein;

            this.dailyPlanArray.push(this.macro.foods[index])
            console.log(this.dailyPlanArray)
        } 
        console.log(
            "calories: " + calories + "\n" +
            "fat: " + fat + "\n" +
            "carbs: " + carbs +  "\n" +
            "protein: " + protein
        );
    }
}

