import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { users } from './users';
import { isLoweredSymbol } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  redirectUrl!: string;
  baseUrl: string = 'http://localhost/angularCRUD/';
  @Output() getLoggedInName:EventEmitter<any> =  new EventEmitter();
  constructor(private httpClient: HttpClient) {}

  public userregistration(
    f_name: any,
    l_name: any,
    email: any,
    password: any,
    mobile: any
  ) {
    return this.httpClient
      .post<any>(this.baseUrl + 'register.php', {
        f_name,
        l_name,
        email,
        password,
        mobile,
      })
      .pipe(
        map((Users) => {
          return Users;
        })
      );
  }
  public userlogin(

    email: any,
    password: any,

  ) {
    return this.httpClient
      .post<any>(this.baseUrl + 'login.php', {
 
        email,
        password,

      })
      .pipe(
        map((Users) => {

          // console.log(Users.email);
          this.setToken(Users.email);
          this.getLoggedInName.emit(true);
          return Users;
        })
      );
  }

  setToken(token:string){
    localStorage.setItem('token',token)
  }

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
    localStorage.removeItem('token');
  }
  isLoggedIn(){
    const usertoken =this.getToken();
    if (usertoken !=null){
    
      return true;
      
    }
   
    return false;
  }
}


