import { Component, OnInit } from '@angular/core';
import macroData from '../../assets/json/db.json'
import { Form, FormBuilder, NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CalculatorService } from '../calculator.service';
import { WebScrapeService } from '../web-scrape.service';

@Component({
  selector: 'app-daily-plan',
  templateUrl: './daily-plan.component.html',
  styleUrls: ['./daily-plan.component.css']
})
export class DailyPlanComponent implements OnInit {

    dailyPlanArray = new Array;
    maxIndex: number = macroData.foods.length - 1;
    dailyPlanTotalMacros = [0,0,0,0];
    genders = ["Male", "Female"];
    activityLevels = ["BMR", "Sedentary", "Light", "Moderate", "Active", "Very Active", "Extra Active"];
    goals = ["Maintain Weight", "Mild Weight Loss", "Weight Loss", "Extreme Weight Loss", "Mild Weight Gain", "Weight Gain", "Extreme Weight Gain"]
    myForm: FormGroup;
    genderControl = new FormControl('');
    activityLevelControl = new FormControl('');
    goalControl = new FormControl('');
    ageControl = new FormControl('');
    heightControl = new FormControl('');
    weightControl = new FormControl('');
    goalMacros: Array<any> = []

    constructor(private fb: FormBuilder) { 
        this.genderControl = new FormControl('');
        this.activityLevelControl = new FormControl('');
        this.goalControl = new FormControl('');
        this.ageControl = new FormControl('');
        this.heightControl = new FormControl('');
        this.weightControl = new FormControl('');

        this.myForm = this.fb.group({
            genderControl: this.genderControl,
            activityLevelControl: this.activityLevelControl,
            goalControl: this.goalControl,
            ageControl: this.ageControl,
            heightControl: this.heightControl,
            weightControl: this.weightControl
        })
    }
    ngOnInit() {
        this.dailyPlanArray = new Array;
    }

    async calculateMacros(ageControl: FormControl, weightControl: FormControl, heightControl: FormControl, genderControl: FormControl, activityLevelControl: FormControl, goalControl: FormControl) {

        this.dailyPlanArray = [];//resets array to prevent multiple instances on press
        let calculator = new CalculatorService()
        let webscraper = new WebScrapeService()

        let url = calculator.calculate(ageControl, weightControl, heightControl, genderControl, activityLevelControl, goalControl)

        this.goalMacros = await webscraper.scrape(url)

        for (let i = 0; i < this.goalMacros.length; i++) {
            this.goalMacros[i] = Number(this.goalMacros[i].replace(',',''))
        }
        let maxCalories = Number(this.goalMacros[0])
        let maxProtein = Number(this.goalMacros[1])
        let maxCarbs = Number(this.goalMacros[2])
        let maxFat = Number(this.goalMacros[3])
        
        let counter = 0;
        for (let i = 0; i < this.goalMacros.length; i++) {
            if (this.goalMacros[i] == 0) {
                counter++;
            }
            if (counter == 3) {
                console.log("YOU GOTTA SEE A DOCTOR")
                this.doctorError();
                return;
            }
        }
        
        this.createDailyPlan(maxCalories, maxProtein, maxCarbs, maxFat)
     }

    doctorError() {
        let doctorHidden = document.getElementById("doctorErrorHidden")
        let otherHidden = document.getElementById("hiddenUntilClick")

        if (otherHidden!.style.display = "block") {
            otherHidden!.style.display = "none"
        }
        if (doctorHidden!.style.display = "none") {
            doctorHidden!.style.display = "block"
        }
    }

    createDailyPlan(maxCalories: number, maxProtein: number, maxCarbs: number, maxFat: number) {
        let sumCalories = 0;
        let sumFat = 0;
        let sumCarbs = 0;
        let sumProtein = 0;
        let index = this.getRandInt(this.maxIndex)
        let food = macroData.foods[index]
        this.dailyPlanArray.push(food)

        while (sumCalories < maxCalories) {
            let index = this.getRandInt(this.maxIndex)
            let food = macroData.foods[index]
            
            if (sumCalories + food.Calories <= maxCalories) {
                if (sumFat + food.Fat <= maxFat) {
                    if (sumCarbs + food.Carbs <= maxCarbs) {
                        if (sumProtein + food.Protein <= maxProtein) {
                            let counter = 0;
                            for (let i = 0; i < this.dailyPlanArray.length; i++) { 
                                if (this.dailyPlanArray[i] == food) {
                                    counter++
                                }
                            }  
                            if (counter <= 3) {
                                this.dailyPlanArray.push(food)
                                sumCalories += food.Calories;
                                sumFat += food.Fat;
                                sumCarbs += food.Carbs;
                                sumProtein += food.Protein;
                            } else continue;
                        }
                    }
                }
            } else break;
        } 
        this.dailyPlanTotalMacros[0] = sumCalories;
        this.dailyPlanTotalMacros[1] = sumFat;
        this.dailyPlanTotalMacros[2] = sumCarbs;
        this.dailyPlanTotalMacros[3] = sumProtein;

        this.revealMacros();
    }

    getRandInt(maxIndex:number) {
        return Math.floor(Math.random() * (this.maxIndex)) 
    }

    revealMacros() {
        let hiddenMacros = document.getElementById("hiddenUntilClick")!;
        let otherHidden = document.getElementById("doctorErrorHidden")

        if (otherHidden!.style.display = "block") {
            otherHidden!.style.display = "none"
        }
        if (hiddenMacros!.style.display = "none") {
            hiddenMacros!.style.display = "block";
        }
    }

    openLink(url: string) { //not needed unless needed for...reasons
        //window.open(url, "_blank")
    }
}