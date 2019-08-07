import {AccountManagementPageResponse, AccountManagementPageResponseAdapter} from './pagination';

export class Roles extends AccountManagementPageResponseAdapter<Role> {

  constructor(response: AccountManagementPageResponse<Role>) {
    super(response, 'roleList');
  }
}

export class Role {
  roleId: string;
  attributes: Attributes;
  composite: boolean;
  displayName: string;
  name: string;
}

export class Attributes {
 [key: string]: string;
}
