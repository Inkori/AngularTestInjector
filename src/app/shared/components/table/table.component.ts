import { Component, Input, OnInit, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';

import { TableParams, SortParams, ColumnSettings } from 'src/app/models/table-params';

import { TableCheckboxDirective } from './directives/table-row/table-row.directive';
import {RowSelectionService} from './row-selection.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit {

  sortParams: SortParams;
  selectedRows: T[] = [];
  columnSettings: ColumnSettings[];

  @Input() items: T[] = [];

  @Input() params: TableParams;

  @Output() sort: EventEmitter<{sortByDirection: boolean, sortByProperty: string}> = new EventEmitter();
  @Output() openTray: EventEmitter<T> = new EventEmitter();

  @ViewChildren(TableCheckboxDirective) rowList: QueryList<TableCheckboxDirective>;

  constructor(
    private rowSelectionService: RowSelectionService<T>
  ) {}

  ngOnInit() {
    this.cloneParams();
    this.setDefaultValue();
  }

  sortBy(sortByProperty: string) {
    if (sortByProperty === this.sortParams.sortByProperty) {
      this.sortParams.sortByDirection = !this.sortParams.sortByDirection;
    } else {
      this.sortParams.sortByDirection = true;
    }
    this.sortParams.sortByProperty = sortByProperty;
    this.sort.emit({sortByDirection: this.sortParams.sortByDirection, sortByProperty: this.sortParams.sortByProperty});
  }

  isSortedBy(sortByProperty: string): boolean {
    return sortByProperty === this.sortParams.sortByProperty;
  }

  get DESC(): boolean {
    return !this.sortParams.sortByDirection;
  }

  onRowClick(item: T) {
    this.rowSelectionService.onSelectRow(item);
  }

  get someSelected(): boolean {
    return this.rowList.some((element: TableCheckboxDirective) => element.checkbox.checked);
  }


  onSelectAll(checkbox: HTMLInputElement): void {
    if (checkbox.checked) {
      this.rowList.map((element: TableCheckboxDirective) => element.checkbox.checked = true);
      this.selectedRows = this.items;
    } else {
      this.rowList.map((element: TableCheckboxDirective) => element.checkbox.checked = false);
      this.selectedRows = [];
    }
  }

  onSelect(item: T, checkbox: HTMLInputElement) {
    if (checkbox.checked) {
      this.selectedRows.push(item);
    } else {
      this.unselectItem(item);
    }
  }

  unselectItem(item) {
    this.selectedRows = this.selectedRows.filter((filterItem) => filterItem !== item);
  }

  resetSelectedRows() {
    this.selectedRows = [];
    if (this.rowList) {
      this.rowList.map((element: TableCheckboxDirective) => element.checkbox.checked = false);
    }
  }

  private cloneParams() {
    this.sortParams = {...this.params.sortQueryParams};
    this.columnSettings = [...this.params.columnSettings];
  }

  private setDefaultValue() {
    this.columnSettings.map((cell: ColumnSettings) => {
      cell.sortParameter ? cell.isSorted = true : cell.isSorted = false;
    });
    if (!this.params.emptyTable) {
    }
  }

  get noResultsFound(): boolean {
    return !this.items.length;
  }

  get customClass(): string {
    return this.params.customClass;
  }
}
