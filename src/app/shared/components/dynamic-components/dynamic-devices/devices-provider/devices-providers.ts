import { ANALYZE_FOR_ENTRY_COMPONENTS, InjectionToken, Provider, Type } from '@angular/core';
import { NgxdProvider } from '@ngxd/core';
import { SubscriptionType } from 'src/app/models/subscription';
import { DynamicDevicesComponent } from '../dynamic-devices.component';


export type DevicesProvider = NgxdProvider<SubscriptionType, Type<DynamicDevicesComponent>>;

export const DEVICE_PROVIDERS = new InjectionToken<DevicesProvider[]>('Device Provider');

export function provideDevices(type: string, component: Type<any>): Provider[] {
    return [
        { provide: DEVICE_PROVIDERS, useValue: { type, component }, multi: true },
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: component, multi: true }
    ];
}
