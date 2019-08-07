import {AccountManagementPageResponse, AccountManagementPageResponseAdapter} from './pagination';

export class Users extends AccountManagementPageResponseAdapter<User> {

  constructor(response: AccountManagementPageResponse<User>) {
    super(response, 'userList');
  }
}

export class User {
  address: string;
  alternativeEmail: string;
  alternativePhone: string;
  compositeRoleName?: string;
  country: string;
  creatorId: string;
  userRoles: UserRole[];
  dateCreated: string;
  dateModified: string;
  displayName: string;
  email: string;
  firstName: string;
  lastName: string;
  loginId: string;
  mobilePhone: string;
  orgId: string;
  portalRole: UserRole;
  resourceUrl: string;
  type: string;
  userId: string;
  photoUrl: string;
  userStatus: string;
}

export class UserRole {
  roleName: string;
  displayName?: string;
  tags?: string[];
}

export class UsersStatistic {
  authenticatedUserCount: number;
  invitedUserCount: number;
}
