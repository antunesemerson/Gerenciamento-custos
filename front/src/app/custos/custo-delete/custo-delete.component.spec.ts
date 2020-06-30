import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustoDeleteComponent } from './custo-delete.component';

describe('CustoDeleteComponent', () => {
  let component: CustoDeleteComponent;
  let fixture: ComponentFixture<CustoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
