import { Component, OnInit } from '@angular/core';
import macroData from 'db.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    macros = macroData;

    constructor() {}

    ngOnInit(): void {
    }

}
