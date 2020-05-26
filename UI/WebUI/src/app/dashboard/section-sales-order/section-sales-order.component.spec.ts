import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSalesOrderComponent } from './section-sales-order.component';

describe('SectionSalesOrderComponent', () => {
  let component: SectionSalesOrderComponent;
  let fixture: ComponentFixture<SectionSalesOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSalesOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSalesOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
