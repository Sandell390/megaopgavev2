import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Cardata } from 'src/app/interfaces/cardata';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { HandleCarsService } from 'src/app/services/handle-cars.service';

@Component({
  selector: 'app-carview-detail',
  templateUrl: './carview-detail.component.html',
  styleUrls: ['./carview-detail.component.css']
})
export class CarviewDetailComponent {
    car$: Observable<Cardata> | undefined;

    grayOut: boolean = true;
    UserObservable: Observable<User | null>;

    constructor(private route: ActivatedRoute, private _handleCarData: HandleCarsService, private authService: AuthService) {
      this.car$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this._handleCarData.getCar(parseInt(params.get('id')!)))
      );
      this.UserObservable = this.authService.userObservable;
      this.UserObservable.subscribe((user) => { if (user == null || user.role != "ADMIN"){ this.grayOut = true; } else { this.grayOut = false;} });
    }

    save(car: Cardata){
      this._handleCarData.saveCar(car);
      console.log(car);
    }

    delete(car: Cardata){
      this._handleCarData.deleteCar(car.id);
      console.log(car);
      
    }
    
}
