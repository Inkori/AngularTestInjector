import { CommonModule } from '@angular/common';
import { NgxdModule } from '@ngxd/core';
import { DynamicDevicesComponent, DEVICES_PROVIDER } from './dynamic-devices.component';
import { DevicesComponentResolver } from './devices-provider/devices.resolver';
import { NgModule } from '@angular/core';
import { DEVICE_PROVIDERS } from './devices-provider/devices-providers';

@NgModule({
  imports: [ CommonModule, NgxdModule ],
  declarations: [ DynamicDevicesComponent ],
  exports: [DynamicDevicesComponent],
  providers: [
    { provide: DEVICE_PROVIDERS, useValue: {}, multi: true },
    DEVICES_PROVIDER,
    DevicesComponentResolver,
  ]
})

export class DynamicDevicesModule { }
