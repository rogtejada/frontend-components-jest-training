import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Unit tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('DOM tests', () => {
    it('the footer element should exist', () => {
      const footer = fixture.debugElement.nativeElement.querySelector('footer');
      expect(footer).toBeTruthy();
    });
  });

  describe('Snapshot tests', () => {
    it('Snapshot of html component=', () => {
      const footer = fixture.debugElement.nativeElement.querySelector('footer');
      expect(footer).toMatchSnapshot('FooterComponent');
    });
  });
});
