import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryTrmService {

  constructor(private http: HttpClient) {     
  }

  public queryTrm() {
    return this.http.get<any>("http://localhost:8080/TRM");
  }
}
