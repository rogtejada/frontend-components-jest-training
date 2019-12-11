import { Location } from '@angular/common';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LayoutTestModuleModule } from 'src/app/test/layout-test-module/layout-test-module.module';
import { HeaderComponent } from './header.component';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        LayoutTestModuleModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture.detectChanges();

  });

  describe('Unit tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('DOM tests', () => {
    it('there are three navigation links', () => {
      const navLinks = fixture.debugElement.queryAll(By.css('.nav-link'));
      expect(navLinks.length).toBe(3);
    });
  });

  describe('Integration tests', () => {
    it('should navigate to the cars route', fakeAsync(() => {
      const carsLink = fixture.debugElement.queryAll(By.css('.nav-link'))[0];

      carsLink.nativeElement.click();
      fixture.whenStable().then(() => {
        expect(location.path()).toBe('/cars');
      });
    }));

    it('should navigate to the motorcycles route', () => {
      const link = fixture.debugElement.queryAll(By.css('.nav-link'))[1];

      link.nativeElement.click();
      fixture.whenStable().then(() => {
        expect(location.path()).toBe('/motorcycles');
      });
    });

    it('should navigate to the trucks route', () => {
      const link = fixture.debugElement.queryAll(By.css('.nav-link'))[2];

      link.nativeElement.click();
      fixture.whenStable().then(() => {
        expect(location.path()).toBe('/trucks');
      });
    });
  });

  describe('Snapshot tests', () => {
    it('Snapshot of html component=', () => {
      const header = fixture.debugElement.nativeElement.querySelector('nav');
      expect(header).toMatchSnapshot('HeaderComponent');
    });
  });
});
