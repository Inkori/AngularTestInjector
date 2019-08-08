import { Component, Input, OnInit } from '@angular/core';
import { TableCellComponentResolver } from './cells-provider/table-cell.resolver';
import { ColumnSettings } from 'src/app/models/table-params';
import { DeviceServise } from 'src/app/device.service';

@Component({
  selector: 'app-dynamic-table-cell-component',
  templateUrl: './dynamic-table-cell-component.component.html'
})
export class DynamicTableCellComponent implements OnInit {
  // @Input() value: string | string[] | number;
  // @Input() format: string;
  // @Input() item: any;
  @Input() cellData: { cell: ColumnSettings, item: any };
  testRes;
  constructor(public resolver: TableCellComponentResolver, private servese: DeviceServise) { }

  async ngOnInit() {
    await this.testFn();
  }
  get defaultValue() {
    return typeof this.format === 'undefined' ? this.value : null;
  }
  async testFn() {

  }
  // get comp() {
  //   return this.servese.getComponent(this.format);
  // }
  get value(): string | string[] | number {
    const keysArray = this.cellData.cell.key.split('+');
    const parsedKeysArray = keysArray.map((key: string) => key);
    if (typeof parsedKeysArray[0] === 'string') {
      return parsedKeysArray.join(' ');
    } else {
      return parsedKeysArray[0];
    }
  }

  get format(): string {
    return this.cellData.cell.format;
  }
  get item(): any {
    return this.cellData.item;
  }

}

