import { Component, OnInit } from '@angular/core';
import macroData from '../../assets/json/macros.json';

interface Macros {
    Name: String;
    Calories: Number;
    Fat: Number;
    Carbs: Number;
    Protein: number
}

@Component({
  selector: 'app-macros',
  templateUrl: './macros.component.html',
  styleUrls: ['./macros.component.css']
})
export class MacrosComponent implements OnInit {

    macros: Macros[] = macroData;

    // parseIt() {
    //     macroData.forEach(element => {
    //         //let parsed = JSON.parse(element);
    //     })
    // }

    constructor() { }

    ngOnInit(): void {
    }

}
