import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterVendeurPage } from './ajouter-vendeur.page';

describe('AjouterVendeurPage', () => {
  let component: AjouterVendeurPage;
  let fixture: ComponentFixture<AjouterVendeurPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterVendeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
