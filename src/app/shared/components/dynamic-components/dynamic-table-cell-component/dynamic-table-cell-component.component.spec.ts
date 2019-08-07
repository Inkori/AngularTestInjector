import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableCellComponent } from './dynamic-table-cell-component.component';

describe('DynamicTableCellComponent', () => {
  let component: DynamicTableCellComponent;
  let fixture: ComponentFixture<DynamicTableCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTableCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
