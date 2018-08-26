import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestItemService {
  private apiUrl : string = 'http://localhost:59434/api/values';

  constructor(private http: HttpClient) { }

  getSubTitle():string{
    return "This app is fetching data through an Angular Service.. !!";
  }

  getTestItem(): Observable<string> {
    let params = new HttpParams().set('id', '5');

    return this.http
        .get<string>(this.apiUrl, {params:params})
        .pipe(catchError(this.handleError));
  }

  getTestItemsList(): Observable<string[]>{
    return this.http
        .get<string[]>(this.apiUrl)    
        .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError('something bad happened');
  }
}
