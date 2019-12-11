import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutTestModuleModule } from 'src/app/test/layout-test-module/layout-test-module.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, FooterComponent, HomeComponent ],
      imports: [
        LayoutTestModuleModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Uit tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('DOM tests', () => {
    it('should have a header', () => {
      const header = fixture.debugElement.nativeElement.querySelector('app-header');
      expect(header).toBeTruthy();
    });

    it('should have a footer', () => {
      const footer = fixture.debugElement.nativeElement.querySelector('app-footer');
      expect(footer).toBeTruthy();
    });
  });
});
