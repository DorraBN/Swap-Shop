import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterProduitPage } from './ajouter-produit.page';

describe('AjouterProduitPage', () => {
  let component: AjouterProduitPage;
  let fixture: ComponentFixture<AjouterProduitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterProduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
