export class TicketModel {
    public ticketNumber: number;
    public licencePlate: string = "";
    public typeVehicle: number = 0;
    public startTime: string;
    public endTime: string;
    public costParking: string = "";
    public paid:boolean;
}