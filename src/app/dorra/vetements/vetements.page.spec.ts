import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VetementsPage } from './vetements.page';

describe('VetementsPage', () => {
  let component: VetementsPage;
  let fixture: ComponentFixture<VetementsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VetementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
