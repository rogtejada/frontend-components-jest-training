import { Component, OnInit } from '@angular/core';
import { Vehicle, VehicleType } from '../shared/vehicle';
import { Paging } from '../shared/paging';
import { VehicleService } from '../core/vehicle.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  title = 'Vehicle Store';
  subtitle = 'Cars Section';
  vehicles: Vehicle[] = [];
  paging: Paging = { page: 0 };

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicles = this.vehicleService.searchVehicle(VehicleType.CAR, this.paging);
  }
}
