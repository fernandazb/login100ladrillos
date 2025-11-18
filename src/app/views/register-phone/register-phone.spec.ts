import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPhone } from './register-phone';

describe('RegisterPhone', () => {
  let component: RegisterPhone;
  let fixture: ComponentFixture<RegisterPhone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPhone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPhone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
