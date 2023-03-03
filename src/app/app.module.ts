import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'
import { ThemePalette } from '@angular/material/core';
import { FormControl } from '@angular/forms';

import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateFoodComponent } from './create-food/create-food.component';
import { MacrosComponent } from './macros/macros.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DayTrackerComponent } from './day-tracker/day-tracker.component';
import { DailyPlanComponent } from './daily-plan/daily-plan.component';
import { CalculatorService } from './calculator.service';

@NgModule({
  declarations: [		
    AppComponent,
    HomeComponent,
    CreateFoodComponent,
    MacrosComponent,
    NavigationComponent,
    DayTrackerComponent,
    DailyPlanComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutocompleteLibModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatInputModule,
    //FormControl,
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
