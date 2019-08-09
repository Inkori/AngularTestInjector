import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag-cell',
  templateUrl: './tag-cell.component.html',
  styleUrls: ['./tag-cell.component.scss']
})
export class TagCellComponent implements OnInit {

  @Input() value: string | string[];

  constructor() { }

  ngOnInit() {
  }
  // static get format() {
  //   return 'tags';
  // }

}
