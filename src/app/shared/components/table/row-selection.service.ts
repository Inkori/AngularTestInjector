import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()

export class RowSelectionService<T> {

  selectedRowItem$: Subject<T> = new Subject<T>();

  constructor() { }

  onSelectRow(item: T): void {
    this.selectedRowItem$.next(item);
  }

}
