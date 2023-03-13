import { Component, OnInit } from '@angular/core';
import macroData from '../../assets/json/db.json';
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
    let counter:number = 0;
        /* if (this.createFoodArray.length > 0) {
            for (let i = 0; i < this.createFoodArray.length; i++) {
                if (JSON.stringify(this.createFoodArray[i]) == JSON.stringify(Object.values(food))) {
                    counter++;
                    if (counter > 0) { 
                        this.changeQty(food);
                    }
                }
            }
        } */
        this.createFoodArray.push(Object.values(food));
        this.totalMacros();
    }

/*     changeQty(food:Object) {
        let count = 2;
        this.qtyHTML = "x" + count;
    } */

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
        console.log(this.newFoodMacrosArray)
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
        console.log(this.newFood)
        this.userMadeFoodsArray.push(this.newFood);
        this.saveNewFood(this.newFood);
    }

    async saveNewFood(newFood: any) {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
           }
           
        /* let bodyContent = JSON.stringify({"id": newFoodName, "Calories": this.newFoodMacrosArray[0], "Fat": this.newFoodMacrosArray[1], "Carbs": this.newFoodMacrosArray[2], "Protein": this.newFoodMacrosArray[3]}); */
        let bodyContent = JSON.stringify(newFood);
           console.log(bodyContent)
        let response = await fetch("http://localhost:3000/foods", { 
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
           
        let data = await response.text();
        return;
    }

    createEntirelyNewFood(form: NgForm) {
        /* Cal = parseInt(Cal)
        Fat = parseInt(Fat)
        Carbs = parseInt(Carbs)
        Protein = parseInt(Protein) */

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
        console.log(typeof id);
        console.log(typeof pro)
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
}
