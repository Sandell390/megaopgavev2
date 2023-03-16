import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Cardata } from 'src/app/interfaces/cardata';
import { HandleCarsService } from 'src/app/services/handle-cars.service';

@Component({
  selector: 'app-carview-detail',
  templateUrl: './carview-detail.component.html',
  styleUrls: ['./carview-detail.component.css']
})
export class CarviewDetailComponent {
    car$: Observable<Cardata> | undefined;

    constructor(private route: ActivatedRoute, private _handleCarData: HandleCarsService) { 
      this.car$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this._handleCarData.getCar(parseInt(params.get('id')!)))
      )
    }
    
}
