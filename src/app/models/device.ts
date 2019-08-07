import {Page} from './pagination';
import {App} from './apps';

export class Devices implements Page<Device> {
  readonly content: Device[];
  readonly number: number;
  readonly size: number;
  readonly totalElements: number;
  readonly totalPages: number;
}

export class Device {
  orgDeviceId: string;
  deviceId: string;
  deviceName: string;
  deviceDisplayName: string;
  deviceManufacturer: string;
  deviceModelType: string;
  deviceSerialnumber: string;
  deviceFamily: string;
  deviceEnclosureType: string;
  deviceAuth: {};
  orgId: string;
  groupId: string;
  groupName: string;
  dateCreated: string;
  dateModified: string;
  deviceMetadata: string;
  deviceState: {
    status: DeviceStatus
  };
  deviceConfig: string;
}

export type DeviceStatus = 'pending' | 'active' | 'deactivated' | 'Unclaimed';

export type ActivationRequestType = 'manual' | 'auto';

export const NOT_ACTIVE_DEVICE_STATUS = ['Pending', 'Deactivated'];

export const READY_FOR_ACTIVATION_STATUSES = ['Pending', 'Ready', 'Deactivated'];




export class DeviceApps {
  install: Set<App>;
  uninstall: Set<App>;

  constructor() {
    this.install = new Set<App>();
    this.uninstall = new Set<App>();
  }
}

export class DevicesPerDayStatistic {
  date: string;
  count: string;
}

export class DevicesPerStatusStatistic {
  total: number;
  deviceByStatus: DevicePerStatus[];
}

export class DevicePerStatus {
  status: DeviceStatus;
  count: number;
  percentage: number;
}

export interface DeviceToActivate {
  mt: string;
  sn: string;
  token?: string;
}

export interface AssignDevice {
  mt: string;
  sn: string;
  token?: string;
  device_name: string;
}
export interface Token {
  token: string;
}

export class DeviceForAssignToGroup {
  deviceId: string;
}
