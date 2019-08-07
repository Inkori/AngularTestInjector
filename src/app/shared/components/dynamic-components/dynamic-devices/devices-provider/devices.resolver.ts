import { Inject, Injectable, Type } from '@angular/core';
import { NgxdResolver } from '@ngxd/core';
import { DEVICE_PROVIDERS, DevicesProvider } from './devices-providers';
import { SubscriptionType } from 'src/app/models/subscription';
import { DynamicDevicesComponent } from '../dynamic-devices.component';


@Injectable()
export class DevicesComponentResolver extends NgxdResolver<string, Type<DynamicDevicesComponent>> {

    constructor(@Inject(DEVICE_PROVIDERS) providers: DevicesProvider[]) {
        super(providers);
    }

}
