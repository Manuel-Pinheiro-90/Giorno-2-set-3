import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReattivoComponent } from './form-reattivo.component';

describe('FormReattivoComponent', () => {
  let component: FormReattivoComponent;
  let fixture: ComponentFixture<FormReattivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormReattivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormReattivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
