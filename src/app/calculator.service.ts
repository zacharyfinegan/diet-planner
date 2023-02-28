import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  baseURL = "https://www.calculator.net/macro-calculator.html?ctype=standard&cage=25&csex=m&cheightfeet=6&cheightinch=1&cpound=165&cheightmeter=180&ckg=65&cactivity=1.465&cgoal=m&cmop=0&cformula=m&cfatpct=20&printit=0&x=90&y=28";
}
