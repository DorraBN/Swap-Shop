import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderpaimPage } from './headerpaim.page';

describe('HeaderpaimPage', () => {
  let component: HeaderpaimPage;
  let fixture: ComponentFixture<HeaderpaimPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderpaimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
