import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PaginatorModule } from 'primeng/primeng';
import { TextMaskModule } from 'angular2-text-mask';

import { TagInputModule } from 'ngx-chips';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
    RouterModule,
    TextMaskModule,
    ReactiveFormsModule,
    PaginatorModule,
    ModalModule.forRoot(),
    TagInputModule
  ],
  exports: [
  ],
  entryComponents: [
  ]
})
export class SharedModule {
}
