import {Page} from './pagination';

export class Apps implements Page<App> {
  readonly content: App[];
  readonly number: number;
  readonly size: number;
  readonly totalElements: number;
  readonly totalPages: number;
}

export class ThirdpartyApps implements Page<AppKey> {
  readonly content: AppKey[];
  readonly number: number;
  readonly size: number;
  readonly totalElements: number;
  readonly totalPages: number;
}

export class App {
  appDisplayName: string;
  appIconUrl: string;
  appMetadata: {};
  packagePlatform: string;
  appSize: string;
  category: string;
  dateCreated: string;
  dateModified: string;
  downloadUri: string;
  groupId: string;
  orgAppId: string;
  orgId: string;
  version: string;
  packageFilename: string;
}

export class AppLicense {
  // tslint:disable-next-line:variable-name
  licence_jwt: string;
}

export class AppKey {
  appId: string;
  appDisplayName: string;
}

export interface ProgressBody {
  percentage: number;
  fileSize: number;
}
