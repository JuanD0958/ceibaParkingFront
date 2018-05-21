import { Component, OnInit } from '@angular/core';
import { RequestRegisterVehicle } from '../model/RequestRegisterModel';
import { RegisterVehicleService } from './register-vehicle.service'
import { SearchVehicleService} from './search-vehicle.service'
import { Vehicle } from '../model/VehicleModel';
import { TicketModel } from '../model/TicketModel';
import { RequestRetireModel } from '../model/RequestRetireModel';
import { VehicleSearchResult } from '../model/VehicleSearchResult'
import { RetireVehicleService } from './retire-vehicle.service';

@Component({
  selector: 'app-register-vehicle',
  templateUrl: './register-vehicle.component.html',
  styleUrls: ['./register-vehicle.component.css']
})
export class RegisterVehicleComponent implements OnInit {
  private requestRegisterVehicle:RequestRegisterVehicle;
  private requestRetireModel:RequestRetireModel;
  private licencePlate:string;
  private typeVehicle:number=0;
  private cubicCentimeters:number;
  private startTime:Date;
  private startHour:string;
  private isValid: boolean = true;
  private isSuccess: boolean = false;
  private message: string;
  private ticket: TicketModel;
  private errorResponseRegister:boolean;
  private errorResponseSearch:boolean;
  private vehicleFound:VehicleSearchResult;
  private vehiclesParkedNow:VehicleSearchResult[];
  private showInvoice:boolean;
  private showListVehiclesParkes:boolean;
  private paid:boolean;

  constructor(private registerVehicleService:RegisterVehicleService, 
    private searchVehicleService:SearchVehicleService,
    private retireVehicleService:RetireVehicleService) { 
    this.requestRegisterVehicle = new RequestRegisterVehicle();
    this.requestRetireModel = new RequestRetireModel();
  }
 
  ngOnInit() {  
    this.paid = false; 
  }

  public registerVehicle():void{
    this.requestRegisterVehicle.vehicle = new Vehicle();
    this.requestRegisterVehicle.vehicle.licencePlate =this.licencePlate;
    this.requestRegisterVehicle.vehicle.typeVehicle =this.typeVehicle;
    this.requestRegisterVehicle.vehicle.cubicCentimeters = this.cubicCentimeters;
    this.requestRegisterVehicle.startTime = new Date();
    this.showInvoice = false;
    this.isValid = this.registerVehicleService.validate(this.requestRegisterVehicle);
    if (this.isValid) {
    this.registerVehicleService.registerVehicle(this.requestRegisterVehicle).subscribe(res => {
      this.isSuccess = true;
      this.paid = false;
      this.errorResponseRegister = false;
      this.ticket = res;   
    },
   err =>{
    this.paid = false;
    this.errorResponseRegister = true;
    this.message =  err.error;
   });          
    } else {
      this.paid = false;
      this.errorResponseRegister = false;
      this.message = "Error";
    }
  }  

  public searchVehicle(licencePlateParam:string):void{  
    this.vehicleFound = null; 
    this.showInvoice = null; 
    this.paid = false;
    this.searchVehicleService.searchVehicle(licencePlateParam).subscribe(res =>{
      this.errorResponseSearch = false;
      this.vehicleFound = res;
    },
    err =>{
      this.paid = false;
      this.errorResponseSearch = true;
      this.message =  err.error;
    });        
  }

  public retireVehicle():void{
      this.showInvoice = false;
      this.requestRetireModel.ticket = new TicketModel();
      this.requestRetireModel.ticket.licencePlate = this.licencePlate;
      this.requestRetireModel.endTime = new Date();
      this.retireVehicleService.retireVehicle(this.requestRetireModel).subscribe(res =>{
        this.ticket = res;
        this.showInvoice = true;
      },
     err =>{
      this.paid = false;
      this.errorResponseSearch = true;
      this.message =  err.error;
     });
  }

  public payParking(ticket:TicketModel):void{
    this.retireVehicleService.payParking(ticket).subscribe(res =>{
    this.paid = true;
     this.message = "Pago exitoso!"
    },
  err=>{
    this.errorResponseSearch = true;
    this.message =  err.error;
  });
  }

  public searchVehiclesParked(){    
    this.vehicleFound = null; 
    this.showInvoice = null; 
    this.paid = false;
    this.searchVehicleService.vehiclesParked().subscribe(res =>{
      this.errorResponseSearch = false;
      this.vehiclesParkedNow = res;
    },
    err =>{
      this.paid = false;
      this.errorResponseSearch = true;
      this.message =  err.error;
    });    
  }
}
