import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { LayoutModule } from './layout/layout.module';
import { MotorcyclesComponent } from './motorcycles/motorcycles.component';
import { TrucksComponent } from './trucks/trucks.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    MotorcyclesComponent,
    TrucksComponent,
    VehicleListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
