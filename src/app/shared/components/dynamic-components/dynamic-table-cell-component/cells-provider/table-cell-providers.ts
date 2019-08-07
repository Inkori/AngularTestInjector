import { ANALYZE_FOR_ENTRY_COMPONENTS, InjectionToken, Provider, Type } from '@angular/core';
import { NgxdProvider } from '@ngxd/core';
import { DynamicTableCellComponent } from '../dynamic-table-cell-component.component';

export type TableCellProvider = NgxdProvider<string, Type<DynamicTableCellComponent>>;

export const TABLE_CELL_PROVIDER = new InjectionToken<TableCellProvider[]>('Table Column Provider');


// TODO: dynamically adds component by type for providers and entryComponent

export function provideTableCell(type: string, component: Type<DynamicTableCellComponent>): Provider[] {
    return [
        { provide: TABLE_CELL_PROVIDER, useValue: { type, component }, multi: true },
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: component, multi: true }
    ];
}
