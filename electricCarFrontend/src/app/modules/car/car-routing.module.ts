import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CarviewDetailComponent } from './carview-detail/carview-detail.component';
import { CarviewListComponent } from './carview-list/carview-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
  {path: 'cars', component: CarComponent, children:[
    {path: '', children: [
      {path: '', component: CarviewListComponent},
      {path: ':id', outlet: 'detail', component: CarviewDetailComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
