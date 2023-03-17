import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cardata } from 'src/app/interfaces/cardata';
import { HandleCarsService } from 'src/app/services/handle-cars.service';

@Component({
  selector: 'app-carview-list',
  templateUrl: './carview-list.component.html',
  styleUrls: ['./carview-list.component.css']
})
export class CarviewListComponent {

  cardataSubject: Observable<Cardata[] | null> = new Observable<Cardata[]>();

  startIndex = 0;
  count = 20;


  constructor(private _handleCarData: HandleCarsService) { 
    this.cardataSubject = this._handleCarData.carObservable;

  }

  applyFilter() {
    this._handleCarData.getCars(this.startIndex,this.count);
  }

}
