import { NgxdModule } from '@ngxd/core';
import { CommonModule } from '@angular/common';
import { DynamicTableCellComponent, } from './dynamic-table-cell-component.component';
import { NgModule, Type, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { TableCellComponentResolver } from './cells-provider/table-cell.resolver';
import { provideTableCell, TABLE_CELL_PROVIDER } from './cells-provider/table-cell-providers';
import { CellModule } from '../../table/cell-components/cell.module';

// TODO: create a new custom cell with the Angular CLI, add static get format () to the new cell, add the format to TableParams.

// const declarations = Reflect.getOwnPropertyDescriptor(CellModule, '__annotations__').value[0].declarations;
// you can cast the component class
// const decorator = (CellModule as any).__annotations__ !== 'undefined' ? (CellModule as any).__annotations__[0].declarations : [];

// const PROVIDERS = decorator.map(component => provideTableCell(component.format, component));
@NgModule({
  imports: [ CommonModule, NgxdModule],
  declarations: [ DynamicTableCellComponent,  ],
  exports: [DynamicTableCellComponent],
  providers: [
    { provide: TABLE_CELL_PROVIDER, useValue: {}, multi: true },
    TableCellComponentResolver,

  ]
})
export class DynamicTableCellModule {
}
