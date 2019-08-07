import { NgModule, ModuleWithProviders, Injector, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TableCheckboxDirective } from './directives/table-row/table-row.directive';
import { TableComponent } from './table.component';
import { SharedModule } from '../../shared.module';
import {RowSelectionService} from './row-selection.service';
import { DynamicTableCellModule } from '../dynamic-components/dynamic-table-cell-component/dynamic-table-cell.module';
import { CellModule } from './cell-components/cell.module';
import { provideTableCell, TABLE_CELL_PROVIDER } from '../dynamic-components/dynamic-table-cell-component/cells-provider/table-cell-providers';

@NgModule({
  declarations: [
    TableComponent,
    TableCheckboxDirective,
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    SharedModule,
    CellModule,
    DynamicTableCellModule,

  ],
  exports: [
    TableComponent,
  ],
  providers: [
    RowSelectionService,
  ]
})
export class TableModule implements OnInit {
  constructor(private inj: Injector) {
    console.log([CellModule]);
    const inje = Injector.create([
      (CellModule as any).__annotations__[0].declarations
   .map(component => provideTableCell(component.format, component))
    ]);
    const gets = inje.get(TABLE_CELL_PROVIDER);
    console.log(gets);
    console.log([CellModule]);
    console.log(this.inj);
  }
  ngOnInit() {
    this.genInj();
    console.log(this.inj);
  }
  private genInj() {
    const inje = Injector.create([
      (CellModule as any).__annotations__[0].declarations
   .map(component => provideTableCell(component.format, component))
    ]);
    return inje;
  }
}
