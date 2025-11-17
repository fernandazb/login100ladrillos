import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegisterUser } from './create-register-user';

describe('CreateRegisterUser', () => {
  let component: CreateRegisterUser;
  let fixture: ComponentFixture<CreateRegisterUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRegisterUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRegisterUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
