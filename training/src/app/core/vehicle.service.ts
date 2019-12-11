import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleType, Vehicle } from '../shared/vehicle';
import { Paging } from '../shared/paging';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) {
   }

   public searchVehicle(type: VehicleType, pageInfo: Paging): Vehicle[] {
    return null;
   }
}
