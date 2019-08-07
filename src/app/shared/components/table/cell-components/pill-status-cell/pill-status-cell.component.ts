import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pill-status-cell',
  templateUrl: './pill-status-cell.component.html',
  styleUrls: ['./pill-status-cell.component.scss']
})
export class PillStatusCellComponent {

  @Input() value: string;
  constructor() { }

  static get format(): string {
    return 'pillStatus';
  }

}
