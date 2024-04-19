import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendeurVentesPage } from './vendeur-ventes.page';

describe('VendeurVentesPage', () => {
  let component: VendeurVentesPage;
  let fixture: ComponentFixture<VendeurVentesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VendeurVentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
