import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

    constructor(@Inject('form') form: Form) { }

    ngOnInit(): void {
    }

    baseURL = "https://www.calculator.net/macro-calculator.html?ctype=standard&cage=25&csex=m&cheightfeet=6&cheightinch=1&cpound=165&cheightmeter=180&ckg=65&cactivity=1.465&cgoal=m&cmop=0&cformula=m&cfatpct=20&printit=0&x=90&y=28";

    heights = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84]

    

    calculate(form: Form) {
        "https://www.calculator.net/macro-calculator.html?ctype=standard&cage="  + "25&csex=m&cheightfeet=6&cheightinch=1&cpound=165&cheightmeter=180&ckg=65&cactivity=1.465&cgoal=m&cmop=0&cformula=m&cfatpct=20&printit=0&x=90&y=28";

        console.log(form)
    }

}
