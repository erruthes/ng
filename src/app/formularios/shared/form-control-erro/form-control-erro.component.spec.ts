import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlErroComponent } from './form-control-erro.component';

describe('FormControlErroComponent', () => {
  let component: FormControlErroComponent;
  let fixture: ComponentFixture<FormControlErroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlErroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
