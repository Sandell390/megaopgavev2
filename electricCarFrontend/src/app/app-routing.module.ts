import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarviewDetailComponent } from './components/carview-detail/carview-detail.component';

const routes: Routes = [
  {path: 'cars/:id', component: CarviewDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
