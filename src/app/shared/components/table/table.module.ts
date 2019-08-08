import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TableCheckboxDirective } from './directives/table-row/table-row.directive';
import { TableComponent } from './table.component';
import { SharedModule } from '../../shared.module';
import {RowSelectionService} from './row-selection.service';
import { DynamicTableCellModule } from '../dynamic-components/dynamic-table-cell-component/dynamic-table-cell.module';

@NgModule({
  declarations: [
    TableComponent,
    TableCheckboxDirective,
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    SharedModule,
    DynamicTableCellModule,

  ],
  exports: [
    TableComponent,
  ],
  providers: [
    RowSelectionService,
  ]
})
export class TableModule  {
}
