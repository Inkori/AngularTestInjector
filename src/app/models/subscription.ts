import {AccountManagementPageResponse, AccountManagementPageResponseAdapter} from './pagination';


export class Subscriptions extends AccountManagementPageResponseAdapter<Subscription> {

  constructor(response: AccountManagementPageResponse<Subscription>) {
    super(response, 'subscriptionList');
  }
}

export class Subscription {
  creatorId: string;
  dateCreated: string;
  dateModified: string;
  description: string;
  name: string;
  subscriptionId: string;
  templateName: string;
}

export enum SubscriptionType {
  THINK_REALITY = 'THINK_REALITY',
  HODAKA = 'HODAKA'
}
