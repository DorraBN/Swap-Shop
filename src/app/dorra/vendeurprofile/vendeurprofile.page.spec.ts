import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendeurprofilePage } from './vendeurprofile.page';

describe('VendeurprofilePage', () => {
  let component: VendeurprofilePage;
  let fixture: ComponentFixture<VendeurprofilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VendeurprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
