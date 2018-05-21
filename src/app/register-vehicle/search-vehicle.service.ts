import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SearchVehicleService {
  constructor(private http: HttpClient) { }

  public searchVehicle(licencePlate: string) {
    return this.http.get<any>("http://localhost:8080/searchVehicle?licencePlate="+licencePlate);
  }

  public vehiclesParked() {
    return this.http.get<any>("http://localhost:8080/vehiclesParked");
  }
}
