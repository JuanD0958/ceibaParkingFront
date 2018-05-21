import { Component, OnInit } from '@angular/core';
import { RequestRegisterVehicle } from '../model/RequestRegisterModel';
import { RegisterVehicleService } from './register-vehicle.service'
import { Vehicle } from '../model/VehicleModel';
import { TicketModel } from '../model/TicketModel';

@Component({
  selector: 'app-register-vehicle',
  templateUrl: './register-vehicle.component.html',
  styleUrls: ['./register-vehicle.component.css']
})
export class RegisterVehicleComponent implements OnInit {
  private requestRegisterVehicle:RequestRegisterVehicle;
  private licencePlate:string;
  private typeVehicle:number=0;
  private cubicCentimeters:number;
  private startTime:Date;
  private startHour:string;
  private isValid: boolean = true;
  private isSuccess: boolean = false;
  private message: string;
  private ticket: TicketModel;
  private errorResponse:boolean;

  constructor(private registerVehicleService:RegisterVehicleService) { 
    this.requestRegisterVehicle = new RequestRegisterVehicle();
  }

  ngOnInit() {   
  }

  public registerVehicle():void{
    this.requestRegisterVehicle.vehicle = new Vehicle();
    this.requestRegisterVehicle.vehicle.licencePlate =this.licencePlate;
    this.requestRegisterVehicle.vehicle.typeVehicle =this.typeVehicle;
    this.requestRegisterVehicle.vehicle.cubicCentimeters = this.cubicCentimeters;
    this.requestRegisterVehicle.startTime = new Date();
       
    this.isValid = this.registerVehicleService.validate(this.requestRegisterVehicle);
    if (this.isValid) {

      /*
      console.log(this.registerVehicleService.registerVehicle(this.requestRegisterVehicle).subscribe(
        (data: TicketModel) => this.ticket = { ...data }, // success path
        error => this.error = error // error path
      ));
*/

    this.registerVehicleService.registerVehicle(this.requestRegisterVehicle).subscribe(res => {
      this.isSuccess = true;
      this.errorResponse = false;
      this.ticket = res;
      this.startTime = new Date(this.ticket.startTime);
      this.startHour = this.startTime.getHours()+":"+this.startTime.getMinutes()+":"+this.startTime.getSeconds();    
    },
   err =>{
    this.errorResponse = true;
    this.message =  err.error;
   });
          
    } else {
      this.errorResponse = false;
      this.message = "Error";
    }
  }
  
  
}
