import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatersportsComponent } from './watersports.component';

describe('WatersportsComponent', () => {
  let component: WatersportsComponent;
  let fixture: ComponentFixture<WatersportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatersportsComponent]
    });
    fixture = TestBed.createComponent(WatersportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
