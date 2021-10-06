import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';
import { LossType } from '../models/LossType';

@Injectable({
    providedIn: 'root'
})
export class LossTypeService {

    constructor(private http: HttpClient) { }
    public getClaims(): Observable<LossType[]> {
        return this.http.get<LossType[]>("https://localhost:44384/api/claims/getAll")
        .pipe(
            map(res => {
            return res;
            }),
        catchError(this.handleError));
        }

    public handleError(error: HttpErrorResponse) {
        console.log(error);
        return throwError(
            'Something happened; please try again later.');
    }
}
