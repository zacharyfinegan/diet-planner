import { Component, OnInit } from '@angular/core';
import macroData from '../../assets/json/macros.json';
import { SelectorContext } from '@angular/compiler';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css']
})
export class CreateFoodComponent implements OnInit {

    macro = macroData;
    currentFood = new Array;
    headers = Object.keys(this.macro[0]);
    totalMacrosArray: Array<number> = [0,0,0,0];

    constructor() { }

    ngOnInit(): void {
        this.macro = macroData;
    }

    // addToCurrentFood(food:Object) {
    //     this.currentFood.push(food);
    //     console.log(Object.values(this.currentFood))
    //     return;
    // }


    addToCurrentFood(food:Object) {
        //let x = JSON.parse(JSON.stringify(food));
        this.currentFood.push(Object.values(food));
    }


    totalMacros() {
        let totalCalories = 0;
        let totalFat = 0;
        let totalCarbs = 0;
        let totalProtein = 0;

        this.currentFood.forEach(function (value) {
            totalCalories += value[1];
            totalFat += value[2];
            totalCarbs += value[3];
            totalProtein += value[4];
        });

        console.log(totalCalories, totalFat, totalCarbs, totalProtein)
        // this.totalMacrosArray.push(totalCalories,totalFat,totalCarbs,totalProtein);
        this.totalMacrosArray[0] = totalCalories;
        this.totalMacrosArray[1] = totalFat;
        this.totalMacrosArray[2] = totalCarbs;
        this.totalMacrosArray[3] = totalProtein;

        console.log(this.totalMacrosArray)
        return this.totalMacrosArray;

    }
}
