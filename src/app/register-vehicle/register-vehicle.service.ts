import { Injectable } from '@angular/core';
import { RequestRegisterVehicle } from '../model/RequestRegisterModel';
import { TicketModel } from '../model/TicketModel'
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { take, catchError  } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterVehicleService {

  constructor(private http: HttpClient) { }

  private formatErrors(error:any){
    throwError ;
  }

  public registerVehicle(request: RequestRegisterVehicle) {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    console.log(JSON.stringify(request));
    return this.http.post<TicketModel>("http://localhost:8080/registerVehicle", JSON.stringify(request), {headers:headers});
  } 

  public validate(request: RequestRegisterVehicle): boolean {
    let isValid = true;
    if (request.vehicle.licencePlate==undefined || request.vehicle.licencePlate.length == 0) {
     isValid = false;
    }
    if (request.vehicle.typeVehicle == 0) {
      isValid = false;
    }
    return isValid;
  }
}