import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninPage } from './signin.page';

describe('SigninPage', () => {
  let component: SigninPage;
  let fixture: ComponentFixture<SigninPage>;

<<<<<<< HEAD
  beforeEach(async(() => {
    fixture = TestBed.createComponent(SigninPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
=======
  beforeEach(() => {
    fixture = TestBed.createComponent(SigninPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
>>>>>>> 8353bd8d1aa4e4bdd0908bae58d0f76050c62ef4

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
