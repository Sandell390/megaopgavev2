import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardata } from 'src/app/interfaces/cardata';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { HandleCarsService } from 'src/app/services/handle-cars.service';

@Component({
  selector: 'app-carform',
  templateUrl: './carform.component.html',
  styleUrls: ['./carform.component.css']
})
export class CarformComponent {
  car: Cardata = {id: 0, brand: "Brand", model: "Model", colors: Array<string>("asd","asd","asd"), year: 2000};

  grayOut: boolean = true;

  UserObservable: Observable<User | null>;
  car$: Observable<Cardata> | undefined;


  constructor( private _handleCarData: HandleCarsService, private authService: AuthService){
    this.UserObservable = this.authService.userObservable;
    this.UserObservable.subscribe((user) => { if (user == null || user.role != "ADMIN"){ this.grayOut = true; } else { this.grayOut = false;} });
  }

  create(){
    console.log(this.car);
    this._handleCarData.createCar(this.car);
  }
}
