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

    

    calculate(ageControl: FormControl, weightControl: FormControl, heightControl: FormControl, genderControl: FormControl, activityLevelControl: FormControl) {

        let feet = this.inchesToFeet(heightControl)[0]
        let inches = this.inchesToFeet(heightControl)[1]

        let newURL = 
        "https://www.calculator.net/macro-calculator.html?ctype=standard&cage=" + ageControl.value + "&csex=m&cheightfeet=" + feet + "&cheightinch=" + inches + "&cpound=" + weightControl.value + " &cheightmeter=180&ckg=65&cactivity=1.465&cgoal=m&cmop=0&cformula=m&cfatpct=20&printit=0&x=90&y=28";
    }

    inchesToFeet(heightInput: FormControl) {
        let heightInt = Number(heightInput.value)
        let feet = Math.floor(heightInt / 12)
        let inches = heightInt % 12
        let height = [feet, inches]
        return height;
    }
}
