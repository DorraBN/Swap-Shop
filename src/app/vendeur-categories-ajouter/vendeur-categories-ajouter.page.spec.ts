import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendeurCategoriesAjouterPage } from './vendeur-categories-ajouter.page';

describe('VendeurCategoriesAjouterPage', () => {
  let component: VendeurCategoriesAjouterPage;
  let fixture: ComponentFixture<VendeurCategoriesAjouterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VendeurCategoriesAjouterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
