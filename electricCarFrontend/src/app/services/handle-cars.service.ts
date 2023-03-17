import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Cardata } from '../interfaces/cardata';

@Injectable({
  providedIn: 'root'
})
export class HandleCarsService {

  private url: string = 'http://localhost:5285';
  private endpointgetCars: string = '/api/electriccar';

  private currentStart: number = 0;
  private currentCount: number = 20;

  private carSubject: Subject<Cardata[] | null> = new BehaviorSubject<Cardata[] | null>([]);

  carObservable: Observable<Cardata[] | null> = this.carSubject.asObservable();

  constructor(private apiClient: HttpClient) { 
    this.getCars(0,20);
  }

  getCars(start: number, count: number)
  {
    this.currentStart = start;
    this.currentCount = count;

    console.log("Getting cars");
    const httpParams = new HttpParams()
      .set('start', start)
      .set('count', count);

    this.apiClient.get<Cardata[]>(this.url + this.endpointgetCars, {params: httpParams}).subscribe( (cardata: Cardata[]) => { this.carSubject.next(cardata); });

  }

  getCar(id: number): Observable<Cardata> {

    const cardata = this.apiClient.get<Cardata>(this.url + this.endpointgetCars + "/" + id);

    return cardata;
  }

  saveCar(car: Cardata){
    this.apiClient.put(this.url + this.endpointgetCars + "/" +car.id, car).subscribe(() => {this.getCars(this.currentStart,this.currentCount);});
    
  }

  deleteCar(id: number){
    this.apiClient.delete(this.url + this.endpointgetCars + "/" +id).subscribe(() => {this.getCars(this.currentStart,this.currentCount);});
  }

  createCar(car: Cardata){
    this.apiClient.post(this.url + this.endpointgetCars, car).subscribe(() => {this.getCars(this.currentStart,this.currentCount);});
  }

}
