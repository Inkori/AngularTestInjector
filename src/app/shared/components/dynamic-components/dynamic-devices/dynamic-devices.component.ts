import { Component, Input } from '@angular/core';
import { DevicesComponentResolver } from './devices-provider/devices.resolver';
import { provideDevices } from './devices-provider/devices-providers';
import { ArVrDeviceComponent } from 'src/app/devices/devices/ar-vr/ar-vr-devices.component';

@Component({
  selector: 'app-dynamic-devices',
  templateUrl: './dynamic-devices.component.html'
})
export class DynamicDevicesComponent {
  @Input() subscriptionId;
  constructor(public resolver: DevicesComponentResolver) { }


  get deviceBySubscription() {
    return this.subscriptionId;
  }

}

export const DEVICES_PROVIDER = provideDevices('123123', ArVrDeviceComponent);

