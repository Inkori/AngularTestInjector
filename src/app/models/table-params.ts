export interface TableParams {
  columnSettings: ColumnSettings[];
  sortQueryParams: SortParams;
  emptyTable?: EmptyTable;
  checkboxHide?: boolean;
  customClass?: string;
}

export interface ColumnSettings {
  cellName: string;
  key: string;
  isSorted?: boolean;
  sortParameter?: string;
  format?: string;
}

export interface SortParams {
  sortByProperty: string;
  sortByDirection: boolean;
}

export interface EmptyTable {
  placeholder: string;
  customClass: string;
}

export const DEFAULT_EMPTY_TABLE_PARAMS: EmptyTable = {
  placeholder: 'SEARCH.NO_RESULTS_FOUND',
  customClass: ''
};
