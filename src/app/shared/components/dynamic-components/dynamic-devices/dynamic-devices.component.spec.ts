import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDevicesComponent } from './dynamic-devices.component';

describe('DynamicDevicesComponent', () => {
  let component: DynamicDevicesComponent;
  let fixture: ComponentFixture<DynamicDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
