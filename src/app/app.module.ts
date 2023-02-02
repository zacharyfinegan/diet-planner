import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateFoodComponent } from './create-food/create-food.component';
import { MacrosComponent } from './macros/macros.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [		
    AppComponent,
    HomeComponent,
    CreateFoodComponent,
    MacrosComponent,
      NavigationComponent,
      NavigationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
