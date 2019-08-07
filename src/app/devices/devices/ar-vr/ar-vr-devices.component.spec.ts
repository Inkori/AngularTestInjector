import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArVrDeviceComponent } from './ar-vr-devices.component';

describe('ArVrDeviceComponent', () => {
  let component: ArVrDeviceComponent;
  let fixture: ComponentFixture<ArVrDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArVrDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArVrDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
