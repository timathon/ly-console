import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCaptchaComponent } from './get-captcha.component';

describe('GetCaptchaComponent', () => {
  let component: GetCaptchaComponent;
  let fixture: ComponentFixture<GetCaptchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCaptchaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
