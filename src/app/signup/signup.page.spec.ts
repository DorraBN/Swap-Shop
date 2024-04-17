import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupPage } from './signup.page';

describe('SignupPage', () => {
  let component: SignupPage;
  let fixture: ComponentFixture<SignupPage>;

<<<<<<< HEAD
  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
=======
  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
>>>>>>> 8353bd8d1aa4e4bdd0908bae58d0f76050c62ef4

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
