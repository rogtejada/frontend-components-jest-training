import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CarsComponent } from './cars.component';
import { CoreModule } from '../core/core.module';
import { Paging } from '../shared/paging';
import { Vehicle, VehicleType } from '../shared/vehicle';
import { VehicleService } from '../core/vehicle.service';
import { LayoutTestModuleModule } from '../test/layout-test-module/layout-test-module.module';

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;
  let vehicleService: VehicleService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsComponent ],
      imports: [
        LayoutTestModuleModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    vehicleService = TestBed.get(VehicleService);
  });

  describe('Unit tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    describe('onInit', () => {
      it('load first page of cars', () => {
        const expetedVehicles: Vehicle[] = [{
        }];
        const expectedPaging: Paging = {
          page: 0
        };
        jest.spyOn(vehicleService, 'searchVehicle').mockReturnValue(expetedVehicles);

        component.ngOnInit();

        expect(vehicleService.searchVehicle).toBeCalledWith(VehicleType.CAR, expectedPaging);
        expect(component.vehicles).toBe(expetedVehicles);
        expect(component.paging).toEqual(expectedPaging);
      });
    });
  });

  describe('DOM tests', () => {
    it('should have a vehicles list', () => {
      const vehicleList = fixture.debugElement.nativeElement.querySelector('app-vehicle-list');
      expect(vehicleList).toBeTruthy();
    });
  });
});
