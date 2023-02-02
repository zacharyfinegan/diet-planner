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
        console.log(this.macro[28].Name);
        console.log(food)
    }
}
