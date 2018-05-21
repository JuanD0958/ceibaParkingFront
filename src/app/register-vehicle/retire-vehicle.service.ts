import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {RequestRetireModel} from '../model/RequestRetireModel';
import {TicketModel} from '../model/TicketModel'

@Injectable({
  providedIn: 'root'
})
export class RetireVehicleService {

  constructor(private http: HttpClient) { }

  public retireVehicle(request: RequestRetireModel) {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post<any>("http://localhost:8080/retireVehicle", JSON.stringify(request), {headers:headers});
  }  
  
  public payParking(ticket: TicketModel) {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post<any>("http://localhost:8080/payParking", JSON.stringify(ticket), {headers:headers});
  }
}
