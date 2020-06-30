import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustoEditComponent } from './custo-edit.component';

describe('CustoEditComponent', () => {
  let component: CustoEditComponent;
  let fixture: ComponentFixture<CustoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
