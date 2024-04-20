import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewVentePage } from './view-vente.page';

describe('ViewVentePage', () => {
  let component: ViewVentePage;
  let fixture: ComponentFixture<ViewVentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
