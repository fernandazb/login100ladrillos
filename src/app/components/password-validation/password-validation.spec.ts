import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordValidation } from './password-validation';

describe('PasswordValidation', () => {
  let component: PasswordValidation;
  let fixture: ComponentFixture<PasswordValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordValidation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordValidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
