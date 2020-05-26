import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPurchaseOrderComponent } from './section-purchase-order.component';

describe('SectionPurchaseOrderComponent', () => {
  let component: SectionPurchaseOrderComponent;
  let fixture: ComponentFixture<SectionPurchaseOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionPurchaseOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
