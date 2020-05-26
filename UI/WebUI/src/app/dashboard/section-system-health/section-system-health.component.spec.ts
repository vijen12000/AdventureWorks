import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSystemHealthComponent } from './section-system-health.component';

describe('SectionSystemHealthComponent', () => {
  let component: SectionSystemHealthComponent;
  let fixture: ComponentFixture<SectionSystemHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSystemHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSystemHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
