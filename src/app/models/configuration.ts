export type ConnectionState = 'Enable' | 'Disable';

export interface Configuration {
  devices: string[];
  package?: {
    package_id: string,
    package_type: string,
    url: string
  };
  udc_connectivity?: UdcConnectivity;
  udc_general?: UdcGeneral;
}

export interface UdcGeneral {
  date_time: string;
  friendly_name?: string;
  language: string;
  managed_device_path?: string;
  auto_timezone?: boolean;
  auto_time?: boolean;
}

export interface UdcConnectivity {
  bluetooth_connection: ConnectionState;
  nfc_connection: ConnectionState;
  wifi_connection: ConnectionState;
}
