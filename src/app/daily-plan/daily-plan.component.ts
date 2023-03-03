import { Component, OnInit } from '@angular/core';
import macroData from '../../assets/json/db.json'
import { CalculatorService } from '../calculator.service';
import { Form, FormBuilder, NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-daily-plan',
  templateUrl: './daily-plan.component.html',
  styleUrls: ['./daily-plan.component.css']
})
export class DailyPlanComponent implements OnInit {

    macro = macroData;
    dailyPlanArray = new Array;
    maxIndex: number = this.macro.foods.length - 1;
    dailyPlanTotalMacros = [0,0,0,0];
    genders = ["Male", "Female"];
    activityLevels = ["BMR", "Sedentary", "Light", "Moderate", "Active", "Very Active", "Extra Active"];
    defaultAge = 30;
    defaultHeight = 73;
    defaultWeight = 193;
    //disableSelect = new FormControl(false);
    myForm: FormGroup;
    genderControl = new FormControl('');


    constructor(private calculator: CalculatorService, private fb: FormBuilder) { 
        this.genderControl = new FormControl('');

        this.myForm = this.fb.group({
            genderControl: this.genderControl,
            activityLevel: ''
        })
    }
    ngOnInit() {
        this.dailyPlanArray = new Array;
  /*       this.myForm = this.fb.group({
            gender: '',
            activityLevel: ''
        }) */
    }

    getRandInt(maxIndex:number) {
        return Math.floor(Math.random() * (this.maxIndex + 1)) 
    }

    createDailyPlan() {
        this.dailyPlanArray = new Array;
        let sumCalories = 0;
        let sumFat = 0;
        let sumCarbs = 0;
        let sumProtein = 0;
        let maxCalories = 2848;
        let maxCalories95 = maxCalories * .95;
        let maxFat = 81;
        let maxCarbs = 380;
        let maxProtein = 175;

        while (sumCalories < maxCalories) {
            let index = this.getRandInt(this.maxIndex)
            let food = this.macro.foods[index]

            if (sumCalories + food.Calories <= maxCalories) {
                if (sumFat + food.Fat <= maxFat) {
                    if (sumCarbs + food.Carbs <= maxCarbs) {
                        if (sumProtein + food.Protein <= maxProtein) {
                            sumCalories += food.Calories;
                            sumFat += food.Fat;
                            sumCarbs += food.Carbs;
                            sumProtein += food.Protein;

                            this.dailyPlanArray.push(food)
                        }
                    }
                }
            }
            else break;
        } 
        this.dailyPlanTotalMacros[0] = sumCalories;
        this.dailyPlanTotalMacros[1] = sumFat;
        this.dailyPlanTotalMacros[2] = sumCarbs;
        this.dailyPlanTotalMacros[3] = sumProtein;
    }

    reveal() {
        let hidden = document.getElementById("hiddenUntilClick")!;
        if (hidden.style.display = "none") {
            hidden.style.display = "block";
        }
    }

    addToWeekly() {

    }

    calculateMacros(form: Form) {
        console.log("gender: " + this.genderControl.value)
        console.log("activityLevel: " + form)
        console.log("age: " + form)
    }

    filterData(gender: string) {
        this.genders = [gender];
        console.log(gender)
    }

    
}

