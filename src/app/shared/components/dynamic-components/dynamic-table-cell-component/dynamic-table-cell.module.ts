import { NgxdModule } from '@ngxd/core';
import { CommonModule } from '@angular/common';
import { DynamicTableCellComponent, } from './dynamic-table-cell-component.component';
import { NgModule, APP_INITIALIZER} from '@angular/core';
import { TableCellComponentResolver } from './cells-provider/table-cell.resolver';
import { TABLE_CELL_PROVIDER, provideTableCell } from './cells-provider/table-cell-providers';
import { DeviceServise } from 'src/app/device.service';



// export async function loadModule() { return () => CellModule; }
// (CellModule as any).__annotations__[0].declarations.map(component => provideTableCell(component.format, component));
export function testAsync(servise: DeviceServise) {
  return () => {
    console.log(servise.setProviders());
    return servise.setProviders();
  };


}
// const declarations = Reflect.getOwnPropertyDescriptor(CellModule, '__annotations__').value[0].declarations;
// const providers = declarations.map(component => provideTableCell(component.format, component));
export function CustomNgModule() {
  return (target) => {
    const anotations = '__anotations__';
    // const decl = target[anotations][0].declarations;
    console.log(target);
    const ngModule = new NgModule();
    NgModule(ngModule)(target);
  };
}

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

console.log([DynamicTableCellModule]);
