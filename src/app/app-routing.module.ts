import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateFoodComponent } from './create-food/create-food.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DailyPlanComponent } from './daily-plan/daily-plan.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'create-food', component: CreateFoodComponent },
    { path: 'navigation', component: NavigationComponent },
    { path: 'daily-plan', component: DailyPlanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
