import { Page } from 'src/app/models/pagination';

export class OTAList  implements Page<OTA> {
  readonly content: OTA[];
  readonly number: number;
  readonly size: number;
  readonly totalElements: number;
  readonly totalPages: number;
}

export interface OTA {
  appDisplayName: string;
  appIconUrl: string;
  appId: string;
  appLicenseKeyId: string;
  appMetadata: {};
  appScope: string;
  appSize: number;
  category: string;
  dateCreated: string;
  dateModified: string;
  deviceIds: string[];
  downloadUri: string;
  groupId: string;
  keys: {
    additionalProp1?: {
      keyId: string;
      status: string;
    },
    additionalProp2?: {
      keyId: string;
      status: string;
    },
    additionalProp3?: {
      keyId: string;
      status: string;
    }
  };
  orgAppId: string;
  orgId: string;
  packagePlatform: string;
  storeAppId: string;
  subscriptionId: string;
  systemImageData: {
    applicability_filter: ApplicabilityFilter[];
    deviceFamily: string;
    fileName: string;
    status: string;
  };
  thirdParty: boolean;
  version: string;
  packageFilename: string;
}


export interface ApplicabilityFilter {
  brand: string;
  country: string;
  default: boolean;
  family: string;
  language: string;
  mfr: string;
  mt: string;
  mtm: string;
  os_bitness: string;
  os_version_equal: string;
  os_version_lessthan: string;
  sub_brand: string;
  tag: string;
  version_equal: string;
  version_lessthan: string;
}
