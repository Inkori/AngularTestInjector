
// import { Component, OnInit, Input } from '@angular/core';
// import { ColumnSettings } from 'src/app/models/table-params';

// @Component({
//   selector: 'app-cell-wrapper',
//   templateUrl: './cell-wrapper.component.html',
//   styleUrls: ['./cell-wrapper.component.scss'],
// })
// export class CellWrapperComponent  implements OnInit {
//   @Input() cellData: { cell: ColumnSettings, item: any };

//   constructor() {

//    }

//   ngOnInit() {
//   }

//   get value(): string | string[] | number {
//     const keysArray = this.cellData.cell.key.split('+');
//     const parsedKeysArray = keysArray.map((key: string) => key);
//     if (typeof parsedKeysArray[0] === 'string') {
//       return parsedKeysArray.join(' ');
//     } else {
//       return parsedKeysArray[0];
//     }
//   }

//   get format(): string {
//     return this.cellData.cell.format;
//   }
//   get item(): any {
//     return this.cellData.item;
//   }

//   // getItemData(keys: string): string | string[] {
//   //   const keysArray = keys.split('.');
//   //   let result = this.cellData.item;
//   //   for (const val of keysArray) {
//   //     console.log(val);
//   //     if (result[val]) {
//   //       result = result[val];
//   //     } else {
//   //       return '';
//   //     }
//   //   }
//   //   return result;
//   // }

// }
