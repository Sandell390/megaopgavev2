import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  ErrorObservable: Observable<boolean>;

  UserObservable: Observable<User | null>;

  username: string = "";
  password: string = "";

  constructor(private authService: AuthService) { 

    this.ErrorObservable = this.authService.errorObservable;
    this.UserObservable = this.authService.userObservable;
    
  }

  Login(){
    this.authService.Login(this.username,this.password);
  }
}
