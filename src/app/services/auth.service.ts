import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/operator/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) {
    return this.http.post('/api/authenticate',
      JSON.stringify(credentials))
      .map(response => {
        // console.log(response.json());

        let result = response.json();

        if (result && result.token) {
          localStorage.setItem("token", result.token);
          return true;
        }

        return false;
      });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    /*
        let awtHelper = new JwtHelper();
        let token = localStorage.getItem('token');
    
        console.log(`$token`);
    
        if (!token)
          return false;
    
        let expirationDate = awtHelper.getTokenExpirationDate(token);
        let isExpired = awtHelper.isTokenExpired(token);
    
        console.log(`Expration =  ${expirationDate} ,Is Expires = ${isExpired}`);
    
        return !isExpired;
        */

    // Easiest way to implement all of this code
    return tokenNotExpired();
  }
}

