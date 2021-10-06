import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Login } from '../models/Login';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public headers: HttpHeaders;
  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({'Content-Type':'application/json',});
  }
  
  public Login(l:Login): Observable<any> {
    return this.http.post<any>("https://localhost:44384/api/UserManagement/login", JSON.stringify(l),{headers: this.headers,responseType:'text' as 'json'})
    .pipe(
      map(token => {
        this.buildSession(token);

      }),
    catchError(this.handleError));
  }

  private buildSession(token:any) {
    localStorage.setItem("jwtToken",token);
    // TODO: need to get the expire time from the api and set it here.
  }

  public logout() {
    localStorage.removeItem("jwtToken");
  }

  

  public handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(
      'Something happened; please try again later.');
  }
}
