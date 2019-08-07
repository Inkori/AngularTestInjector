import { Injectable } from '@angular/core';
import { Device } from './devices/models';
import { of, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeviceServise {
  DEVICES: Device[] = [
    { deviceName: '12321', deviceModelType: 'adsas', deviceManufacturer: 'ADSDAS' },
    { deviceName: '123232131', deviceModelType: 'adDsas', deviceManufacturer: 'ADSDXXZCAS' },
    {deviceName: '1232131232121', deviceModelType: 'adasdasdasdsas', deviceManufacturer: 'ADSAAADAS'}
  ];
  constructor() { }
  getDevices(): Observable<Device[]> {
    return of(this.DEVICES);
  }
}
