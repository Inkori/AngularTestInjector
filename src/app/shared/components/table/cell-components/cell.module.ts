import { NgModule, InjectionToken, Provider, Injector, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { PillStatusCellComponent } from './pill-status-cell/pill-status-cell.component';
import { CommonModule } from '@angular/common';
import { TagCellComponent } from './tag-cell/tag-cell.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { provideTableCell } from '../../dynamic-components/dynamic-table-cell-component/cells-provider/table-cell-providers';
import { DynamicTableCellModule } from '../../dynamic-components/dynamic-table-cell-component/dynamic-table-cell.module';
// export default async function getMagicalProfile() {
//   const providers = await (CellModule as any).__annotations__[0].declarations
//   .map(component => provideTableCell(component.format, component));
//   return providers;
// }
// const provider = getMagicalProfile();
// console.log(provider);
// const tested: Provider[] = [];
// // hello().then(data => tested = data);

@NgModule({
  declarations: [
    PillStatusCellComponent,
    TagCellComponent,

  ],
  imports: [CommonModule, ],
  exports: [],
})
export class CellModule {
  constructor() {
    Injector.create([
      (CellModule as any).__annotations__[0].declarations
   .map(component => provideTableCell(component.format, component))
    ]);
  }
}
// const t = (CellModule as any).__annotations__[0].declarations
//    .map(component => provideTableCell(component.format, component));

// export interface TestProvider {
//   declarations: any;
//   }

// export const TEST_PROVIDERS = new InjectionToken<TestProvider[]>('Test Provider');





