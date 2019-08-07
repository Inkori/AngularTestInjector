import { Inject, Injectable, Type } from '@angular/core';
import { NgxdResolver } from '@ngxd/core';
import { TABLE_CELL_PROVIDER, TableCellProvider } from './table-cell-providers';
import { DynamicTableCellComponent } from '../dynamic-table-cell-component.component';

 // TODO: NgxdResolver creates new arrays of objects, such as Map (), where key = type, value = component

@Injectable()
export class TableCellComponentResolver extends NgxdResolver<string, Type<DynamicTableCellComponent>> {

    constructor(@Inject(TABLE_CELL_PROVIDER) providers: TableCellProvider[]) {
        super(providers);
    }

}
