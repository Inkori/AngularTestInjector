
import { DeviceServise } from 'src/app/device.service';


import { AR_VR_TABLE_CONFIG } from './table-config/ar-vr-table.config';
import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { TableParams } from 'src/app/models/table-params';
import { Device } from '../../models';

@Component({
  selector: 'app-ar-vr-devices',
  templateUrl: './ar-vr-devices.component.html',
  styleUrls: ['./ar-vr-devices.component.scss']
})
export class ArVrDeviceComponent implements OnInit  {
  devices: Device[];
    public bsModalRef: BsModalRef;

    readonly tableConfig: TableParams = {...AR_VR_TABLE_CONFIG};

    constructor(
      private deviceService: DeviceServise,
      ) {
    }
  ngOnInit() {
    this.devicesGet();
    }
   devicesGet() {
    return this.deviceService.getDevices().subscribe(data => this.devices = data);
  }

}
