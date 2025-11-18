import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCodePhone } from './modal-code-phone';

describe('ModalCodePhone', () => {
  let component: ModalCodePhone;
  let fixture: ComponentFixture<ModalCodePhone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCodePhone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCodePhone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
