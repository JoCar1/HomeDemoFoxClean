import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamposRequeridosComponent } from './campos-requeridos.component';

describe('CamposRequeridosComponent', () => {
  let component: CamposRequeridosComponent;
  let fixture: ComponentFixture<CamposRequeridosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamposRequeridosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamposRequeridosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
