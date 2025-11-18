import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInformation } from './show-information';

describe('ShowInformation', () => {
  let component: ShowInformation;
  let fixture: ComponentFixture<ShowInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
