import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatersportsdetailedpageComponent } from './watersportsdetailedpage.component';

describe('WatersportsdetailedpageComponent', () => {
  let component: WatersportsdetailedpageComponent;
  let fixture: ComponentFixture<WatersportsdetailedpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatersportsdetailedpageComponent]
    });
    fixture = TestBed.createComponent(WatersportsdetailedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
