import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashvPage } from './dashv.page';

describe('DashvPage', () => {
  let component: DashvPage;
  let fixture: ComponentFixture<DashvPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
