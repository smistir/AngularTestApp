import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

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

    return this.http.get<string>(this.apiUrl, {params:params});
  }
}
