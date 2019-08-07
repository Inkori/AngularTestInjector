import {AccountManagementPageResponse, AccountManagementPageResponseAdapter} from './pagination';

// TODO: Please use is as return param organizations api calls
export class Organizations extends AccountManagementPageResponseAdapter<Organization> {

  constructor(response: AccountManagementPageResponse<Organization>) {
    super(response, 'organizationList');
  }
}

export class Organization {
  address: string;
  adminName: string;
  authType: string;
  country: OrganizationCountry;
  currency: string;
  creatorId?: string;
  dateCreated: string;
  dateModified?: string;
  displayName: string;
  logoUrl: string;
  phone: string;
  name: string;
  orgId: string;
  ownerEmail: string;
  subscriptionId: string;
  type: string;
  webUrl?: string;
  orgStatus?: string;
}

export enum OrganizationCountry {
  USA = 'COUNTRY.USA',
  CHINA = 'COUNTRY.CHINA',
  FRANCE = 'COUNTRY.FRANCE',
  SPAIN = 'COUNTRY.SPAIN',
  PORTUGAL = 'COUNTRY.PORTUGAL',
  ITALY = 'COUNTRY.ITALY',
  GERMANY = 'COUNTRY.GERMANY',
  NETHERLANDS = 'COUNTRY.NETHERLANDS',
  UKRAINE = 'COUNTRY.UKRAINE'
}

export interface RecentOrganization {
  orgId: string;
  subscriptionId: string;
  displayName: string;
}

