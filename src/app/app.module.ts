import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateFoodComponent } from './create-food/create-food.component';
import { MacrosComponent } from './macros/macros.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DayTrackerComponent } from './day-tracker/day-tracker.component';
import { DailyPlanComponent } from './daily-plan/daily-plan.component';


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
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
