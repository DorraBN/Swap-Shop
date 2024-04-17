import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home2Page } from './home2.page';

describe('Home2Page', () => {
  let component: Home2Page;
  let fixture: ComponentFixture<Home2Page>;

<<<<<<< HEAD
  beforeEach(async(() => {
    fixture = TestBed.createComponent(Home2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
=======
  beforeEach(() => {
    fixture = TestBed.createComponent(Home2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
>>>>>>> 8353bd8d1aa4e4bdd0908bae58d0f76050c62ef4

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
