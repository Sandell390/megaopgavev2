import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Cardata } from 'src/app/interfaces/cardata';
import { HandleCarsService } from 'src/app/services/handle-cars.service';

@Component({
  selector: 'app-carview-list',
  templateUrl: './carview-list.component.html',
  styleUrls: ['./carview-list.component.css']
})
export class CarviewListComponent {

  cardataSubject: Subject<Cardata> = new Subject<Cardata>();

  constructor(private _handleCarData: HandleCarsService) { 
    

  }


}
