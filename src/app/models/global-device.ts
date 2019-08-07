import {Page} from './pagination';

export class GlobalDevices implements Page<GlobalDevice> {
  readonly content: GlobalDevice[];
  readonly number: number;
  readonly size: number;
  readonly totalElements: number;
  readonly totalPages: number;
}

// tslint:disable:variable-name
export class GlobalDevice {
  name: string;
  description: string;
  image: string;
  category: string;
  mfr: string;
  brand: string;
  family: string;
  sn: string;
  mt: string;
  mtm: string;
  enclosure: string;
  imei: string;
  country: string;
  language: string;
  os: string;
  tag: string;
  reserved1: string;
  reserved2: string;
  reserved3: string;
  reserved4: string;
  reserved5: string;
  device_id: string;
  sub_brand: string;
  'lan-mac': string;
  'wifi-mac': string;
  'mb-mac': string;
  os_bitness: string;
  os_version: string;
  preload_version: string;
  firmware1_version: string;
  firmware2_version: string;
  mfr_date: string;
  deviceKey_pub: string;
  otsKey: string;
  activation_code: string;
}
