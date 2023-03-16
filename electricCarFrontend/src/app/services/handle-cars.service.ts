import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardata } from '../interfaces/cardata';

@Injectable({
  providedIn: 'root'
})
export class HandleCarsService {

  url: string = 'http://localhost:5285';
  endpointgetCars: string = '/api/electriccar';

  constructor(private apiClient: HttpClient) { }

  getCars(start: number, count: number): Observable<Cardata[]> 
  {
    console.log("Getting cars");
    const httpParams = new HttpParams()
      .set('start', start)
      .set('count', count);

    const cardata = this.apiClient.get<Cardata[]>(this.url + this.endpointgetCars, {params: httpParams});

    return cardata;
  }

  getCar(id: number): Observable<Cardata> {

    const cardata = this.apiClient.get<Cardata>(this.url + this.endpointgetCars + "/" + id);

    return cardata;
  }


}
