import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatercombodetailedComponent } from './watercombodetailed.component';

describe('WatercombodetailedComponent', () => {
  let component: WatercombodetailedComponent;
  let fixture: ComponentFixture<WatercombodetailedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatercombodetailedComponent]
    });
    fixture = TestBed.createComponent(WatercombodetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
