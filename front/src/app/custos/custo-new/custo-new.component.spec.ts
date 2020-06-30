import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustoNewComponent } from './custo-new.component';

describe('CustoNewComponent', () => {
  let component: CustoNewComponent;
  let fixture: ComponentFixture<CustoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
