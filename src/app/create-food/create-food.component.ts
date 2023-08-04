import { Component, OnInit } from '@angular/core';
import macroData from 'db.json';
import { SelectorContext } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css']
})
export class CreateFoodComponent implements OnInit {
    macro = macroData;
    createFoodArray = new Array;
    newFoodMacrosArray: Array<number> = [0,0,0,0];
    newFood: any;
    userMadeFoodsArray = new Array<any>;
    qtyHTML = new String;

    constructor() { }
    ngOnInit(): void {
        this.macro = macroData;
    }

    addToNewFood(food:Object) {
        this.createFoodArray.push(Object.values(food));
        this.totalMacros();
    }

    totalMacros() {
        let totalCalories = 0;
        let totalFat = 0;
        let totalCarbs = 0;
        let totalProtein = 0;

        this.createFoodArray.forEach(function (value) {
            totalCalories += value[1];
            totalFat += value[2];
            totalCarbs += value[3];
            totalProtein += value[4];
        });
        this.newFoodMacrosArray[0] = totalCalories;
        this.newFoodMacrosArray[1] = totalFat;
        this.newFoodMacrosArray[2] = totalCarbs;
        this.newFoodMacrosArray[3] = totalProtein;

        return this.newFoodMacrosArray;
    }

    reset() {
        this.createFoodArray.length = 0;
        this.newFoodMacrosArray.length = 0;
    }

    remove (food: any) {
        this.createFoodArray.splice(this.createFoodArray.indexOf(food), 1)
        this.newFoodMacrosArray[0] = this.newFoodMacrosArray[0] - food[1]
        this.newFoodMacrosArray[1] = this.newFoodMacrosArray[1] - food[2]
        this.newFoodMacrosArray[2] = this.newFoodMacrosArray[2] - food[3]
        this.newFoodMacrosArray[3] = this.newFoodMacrosArray[3] - food[4]

        if ((this.newFoodMacrosArray[0] == 0) && (this.newFoodMacrosArray[1] == 0) && (this.newFoodMacrosArray[2] == 0) && (this.newFoodMacrosArray[3] == 0)) {
            let hiddenTitle = document.getElementById("hiddenTitle")!;
            if (hiddenTitle.style.display = "block") {
                hiddenTitle.style.display = "none";
            }
            let hiddenTable = document.getElementById("hiddenTable")
            if (hiddenTable!.style.display = "block") {
                hiddenTable!.style.display = "none";
            }
        }
    }

    createNewFood(newFoodName: string) {
        this.newFood = 
        {
            id: newFoodName,
            Calories: this.newFoodMacrosArray[0],
            Fat: this.newFoodMacrosArray[1],
            Carbs: this.newFoodMacrosArray[2],
            Protein: this.newFoodMacrosArray[3]
        }
        this.userMadeFoodsArray.push(this.newFood);
        this.saveNewFood(this.newFood);
    }

    async saveNewFood(newFood: any) {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
        }
        let bodyContent = JSON.stringify(newFood);
/*            console.log(bodyContent)
 */        let response = await fetch("http://localhost:3000/foods/", { 
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
        let data = await response.text();
        return;
    }

    async deleteFood(food:any) {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
        }
        let id = food.id
        let url = "http://localhost:3000/foods/" + food.id
        let response = await fetch(url, {
            method: "DELETE",
        })
    }
    popup() {
        let popup = document.getElementById("popup")
        popup!.classList.toggle("show")
    }

    createEntirelyNewFood(form: NgForm) {

        let id  = form.value.Name
        let cal = form.value.Calories
        let fat = form.value.Fat
        let car = form.value.Carbs
        let pro = form.value.Protein

        this.newFood = {
            id: id,
            Calories: parseInt(cal),
            Fat: parseInt(fat),
            Carbs: parseInt(car),
            Protein: parseInt(pro)
        };
        this.newFoodMacrosArray[0] = parseInt(cal);
        this.newFoodMacrosArray[1] = parseInt(fat);
        this.newFoodMacrosArray[2] = parseInt(car);
        this.newFoodMacrosArray[3] = parseInt(pro);
        this.createNewFood(id);
    }

    reveal() {
        let hiddenTitle = document.getElementById("hiddenTitle")!;
        if (hiddenTitle.style.display = "none") {
            hiddenTitle.style.display = "block";
        }
        let hiddenTable = document.getElementById("hiddenTable")
        if (hiddenTable!.style.display = "none") {
            hiddenTable!.style.display = "block";
        }
    }
    hide() {
        let hiddenTable = document.getElementById("hiddenTable")
        let hiddenTitle = document.getElementById("hiddenTitle")

        if (hiddenTable!.style.display = "block") {
            hiddenTable!.style.display = "none"
        }
        if (hiddenTitle!.style.display = "block") {
            hiddenTitle!.style.display = "none"
        }
    }
}
