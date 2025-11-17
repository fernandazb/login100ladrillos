import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCards } from './social-cards';

describe('SocialCards', () => {
  let component: SocialCards;
  let fixture: ComponentFixture<SocialCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
