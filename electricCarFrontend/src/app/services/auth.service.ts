import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../interfaces/user';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, ReplaySubject, Subject, tap, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:5285';
  private endpointgetLogin: string = '/api/login';

  private userSubject: Subject<User | null> = new ReplaySubject<User | null>(1);

  userObservable: Observable<User | null> = this.userSubject.asObservable();

  private errorSubject: Subject<boolean> = new Subject<boolean>();

  errorObservable: Observable<boolean> = this.errorSubject.asObservable();

  constructor(private apiClient: HttpClient) { }

  Login(username: string, password: string) {

    this.apiClient.post<User>(this.url + this.endpointgetLogin + "?username=" + username + "&password=" + password,{}).pipe(
      tap({
        next: (user) => {this.userSubject.next(user);this.errorSubject.next(false);},
        error: () => {this.errorSubject.next(true); this.userSubject.next(null);},
      })
      
      
    ).subscribe();
  }
}
