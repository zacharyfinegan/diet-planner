import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class CalculatorService {

    constructor() { }

    baseURL = "https://www.calculator.net/macro-calculator.html?ctype=standard&cage=25&csex=m&cheightfeet=6&cheightinch=1&cpound=165&cheightmeter=180&ckg=65&cactivity=1.465&cgoal=m&cmop=0&cformula=m&cfatpct=20&printit=0&x=90&y=28";

    heights = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84]

    

    calculate(ageControl: FormControl, weightControl: FormControl, heightControl: FormControl, genderControl: FormControl, activityLevelControl: FormControl, goalControl: FormControl) {

        let feet = this.calcHeight(heightControl)[0]
        let inches = this.calcHeight(heightControl)[1]
        let gender = this.calcGender(genderControl)
        let activityCode = this.calcActivityLevel(activityLevelControl)
        let goal = this.calcGoal(goalControl)

        let newURL = 
        "https://www.calculator.net/macro-calculator.html?ctype=standard&cage=" + ageControl.value + "&csex=" + gender + "&cheightfeet=" + feet + "&cheightinch=" + inches + "&cpound=" + weightControl.value + "&cheightmeter=180&ckg=65&cactivity=" + activityCode + "&cgoal=" + goal + "&cmop=0&cformula=m&cfatpct=20&printit=0&x=90&y=28";
        console.log(newURL)
        return newURL;
    }

    calcHeight(heightInput: FormControl) {
        let heightInt = Number(heightInput.value)
        let feet = Math.floor(heightInt / 12)
        let inches = heightInt % 12
        let height = [feet, inches]
        return height;
    }

    calcGender(genderInput: FormControl) {
        let gender;
        if (genderInput.value == "Male") {
            gender = "m";
        } else { gender = "f" };
        console.log(genderInput.value)
        return gender;
    }

    calcActivityLevel(activityLevelInput: FormControl) {
        let value;

        if (activityLevelInput.value == "BMR") {
            value = 1
        }
        else if (activityLevelInput.value == "Sedentary") {
            value = 1.2
        }
        else if (activityLevelInput.value == "Light") {
            value = 1.375
        }
        else if (activityLevelInput.value == "Moderate") {
            value = 1.465
        }
        else if (activityLevelInput.value == "Active") {
            value = 1.55
        }
        else if (activityLevelInput.value == "Very Active") {
            value = 1.725
        }
        else if (activityLevelInput.value == "Extra Active") {
            value = 1.9
        }

        return value;
    }

    calcGoal(goalInput: FormControl) {
        let value;

        if (goalInput.value == "Maintain Weight") {
            value = "m"
        }
        if (goalInput.value == "Mild Weight Loss") {
            value = "l"
        }
        if (goalInput.value == "Weight Loss") {
            value = "l1"
        }
        if (goalInput.value == "Extreme Weight Loss") {
            value = "l2"
        }
        if (goalInput.value == "Mild Weight Gain") {
            value = "g"
        }
        if (goalInput.value == "Weight Gain") {
            value = "g1"
        }
        if (goalInput.value == "Extreme Weight Gain") {
            value = "g2"
        }

        return value;
    }
}