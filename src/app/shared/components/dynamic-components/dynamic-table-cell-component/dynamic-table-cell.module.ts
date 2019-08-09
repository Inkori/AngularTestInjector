import { NgxdModule } from '@ngxd/core';
import { CommonModule } from '@angular/common';
import { DynamicTableCellComponent, } from './dynamic-table-cell-component.component';
import { NgModule, APP_INITIALIZER, ANALYZE_FOR_ENTRY_COMPONENTS, COMPILER_OPTIONS, CompilerFactory, Compiler} from '@angular/core';
import { TableCellComponentResolver } from './cells-provider/table-cell.resolver';
import { TABLE_CELL_PROVIDER, provideTableCell } from './cells-provider/table-cell-providers';
import { DeviceServise } from 'src/app/device.service';
import {  CompilerConfig } from '@angular/compiler';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

// const annotations = '__annotations__';
// export async function loadModule() {
//   return () => {
//     CellModule[annotations][0].declarations.map(component => provideTableCell(component.format, component));
//     console.log(CellModule[annotations][0]);
//   };
// }

// export async function providers() {
//   await loadModule().then(module => {
//     console.log([module[annotations]]);
//     return module[annotations][0].declarations.map(component => provideTableCell(component.format, component));
//   });
// }
// (CellModule as any).__annotations__[0].declarations.map(component => provideTableCell(component.format, component));
// export function testAsync(servise: DeviceServise) {
//   return () => {
//     console.log(servise.setProviders());
//     return servise.setProviders();
//   };


// }

export function createCompiler(fn: CompilerFactory): Compiler {
	return  fn.createCompiler();
}
@NgModule({
  imports: [ CommonModule, NgxdModule],
  declarations: [ DynamicTableCellComponent,  ],
  exports: [DynamicTableCellComponent],
  providers: [
    { provide: TABLE_CELL_PROVIDER, useValue: {}, multi: true },
    {
      provide: COMPILER_OPTIONS,
      useValue: {},
      multi: true
    },
    {
      provide: CompilerFactory,
      useClass: JitCompilerFactory,
      deps: [COMPILER_OPTIONS]
    },
    {
      provide: Compiler,
      useFactory: createCompiler,
      deps: [CompilerFactory]
    },
    TableCellComponentResolver,
  ]
})
export class DynamicTableCellModule {
}

