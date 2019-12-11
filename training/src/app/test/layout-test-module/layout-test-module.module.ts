import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { VehicleModule } from 'src/app/vehicle/vehicle.module';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { Routes } from '@angular/router';
import { NoopComponent } from './noop/noop.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VehicleListComponent } from 'src/app/vehicle-list/vehicle-list.component';

const routes: Routes = [
  {path: 'cars', component: NoopComponent},
  {path: 'motorcycles', component: NoopComponent},
  {path: 'trucks', component: NoopComponent}
];

@NgModule({
  declarations: [NoopComponent, VehicleListComponent],
  imports: [
    CommonModule,
    HttpClientTestingModule,
    VehicleModule,
    RouterTestingModule.withRoutes(routes)
  ],
  exports: [
    CommonModule,
    HttpClientTestingModule,
    VehicleModule,
    RouterTestingModule,
    VehicleListComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class LayoutTestModuleModule { }
