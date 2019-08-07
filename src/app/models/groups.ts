import {AccountManagementPageResponseAdapter, AccountManagementPageResponse} from './pagination';

export class Groups extends AccountManagementPageResponseAdapter<Group> {

  constructor(response: AccountManagementPageResponse<Group>) {
    super(response, 'groupList');
  }
}

export class Group {
  apps: string[];
  creatorId: string;
  dateCreated: string;
  dateModified: string;
  devices: string[];
  disableIdentityIntegration: boolean;
  displayName: string;
  groupId: string;
  name: string;
  orgId: string;
  parentId: string;
  resourceUrl: string;
  type: string;
  users: string[];
}

export class GroupCreateRequest {
  creatorId?: string;
  disableIdentityIntegration?: boolean;
  displayName: string;
  name: string;
  parentId?: string;
  type: string;
}

export class GroupPatchRequest {
  displayName: string;
  name: string;
  type: string;
}

export class GroupCreateResponse {
  refId: string;
  url: string;
}
