import { TestBed } from '@angular/core/testing';

import { VehicleService } from './vehicle.service';
import { LayoutTestModuleModule } from '../test/layout-test-module/layout-test-module.module';

describe('VehicleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      LayoutTestModuleModule
    ]
  }));

  it('should be created', () => {
    const service: VehicleService = TestBed.get(VehicleService);
    expect(service).toBeTruthy();
  });
});
