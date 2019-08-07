export class PageRequest {
  pageNumber?: number;
  pageSize?: number;
  sortByProperty?: string;
  sortByDirection?: boolean;
  activityState?: string;
}

export interface Page<T> {
  readonly number: number;
  readonly size: number;
  readonly content: T[];
  readonly totalElements: number;
  readonly totalPages: number;
}

export const emptyPage = <T extends Page<any>>() => {
  return {
    number: 0,
    size: 0,
    totalElements: 0,
    totalPages: 0,
    content: []
  } as T;
};

export abstract class AccountManagementPageResponseAdapter<T> implements Page<T> {
  readonly number: number;
  readonly size: number;
  readonly content: T[];
  readonly totalElements: number;
  readonly totalPages: number;

  protected constructor(response: AccountManagementPageResponse<T>, payloadKey: string) {
    this.number = response.page.number;
    this.size = response.page.size;
    this.totalElements = response.page.totalElements;
    this.totalPages = response.page.totalPages;
    this.content = this.sanitizeContent(payloadKey, response);
  }

  private sanitizeContent(payloadKey: string, response: AccountManagementPageResponse<T>): T[] {
      return response._embedded ? response._embedded[payloadKey] : [];
  }
}

export class AccountManagementPageResponse<T> {
  page: AccountManagementPage;
  // tslint:disable-next-line:variable-name
  _embedded: { [key: string]: T[] };
}

export class AccountManagementPage {
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export class AccountManagementBulkActionResponse {
  [ key: string ]: string[];
}
