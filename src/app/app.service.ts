import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Cookie} from 'ng2-cookies/ng2-cookies';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import{HttpHeaders,HttpClient} from '@angular/common/http';
import{HttpErrorResponse,HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url="https://chatapi.edwisor.com";


  constructor(public http:HttpClient) {}
   
  public signupFucntion(data): Observable<any>{
    const params = new HttpParams()
    .set('firstName',data.firstName)
    .set('lastName',data.lastName)
    .set('mobile',data.mobile)
    .set('email',data.email)
    .set('password',data.password)
    .set('apiKey',data.apiKey);
    return this.http.post(`${this.url}/api/v1/users/signup`,params);
    
  }//End of signup function

  public signinFunction(data):Observable <any>{
    const params=new HttpParams()
    .set('email',data.email)
    .set('password',data.password);
    return this.http.post(`${this.url}/api/v1/users/signin`,params);
  }//End of signin Function

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError

}
