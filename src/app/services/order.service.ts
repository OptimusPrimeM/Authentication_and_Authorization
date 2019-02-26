import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private http: AuthHttp) {
  }

  getOrders() {

    // let headers = new Headers();
    // let token = localStorage.getItem('token');
    // headers.append('Authorization', 'Bearer' + token);

    // console.log(headers);

    // let options = new RequestOptions({ headers: headers });

    return this.http.get('/api/orders')
      .map(response => response.json());
  }
}
