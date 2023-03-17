import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { CarRoutingModule } from './car-routing.module';
import { CarviewListComponent } from './carview-list/carview-list.component';
import { CarComponent } from './car/car.component';
import { CarviewDetailComponent } from './carview-detail/carview-detail.component';
import { CarformComponent } from './carform/carform.component';


@NgModule({
  declarations: [
    
  
    CarviewListComponent,
            CarComponent,
            CarviewDetailComponent,
            CarformComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    FormsModule
  ]
})
export class CarModule { }
