import { NgModule, SystemJsNgModuleLoader, NgModuleFactoryLoader } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { SharedModule } from '../shared/shared.module';
import { TableModule } from '../shared/components/table/table.module';
import { DynamicDevicesModule } from '../shared/components/dynamic-components/dynamic-devices/dynamic-devices.module';
import { DeviceServise } from '../device.service';
import { ArVrDeviceComponent } from './devices/ar-vr/ar-vr-devices.component';

const routes: Routes = [
  { path: '', component: DevicesComponent}
];

@NgModule({
  declarations: [
    DevicesComponent,
    ArVrDeviceComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DynamicDevicesModule,
    TableModule,
  ],
  exports: [
    DevicesComponent
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
    DeviceServise,
  ]
})
export class DevicesModule { }
