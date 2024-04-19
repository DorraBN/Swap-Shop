import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendeurCategoriesPage } from './vendeur-categories.page';

describe('VendeurCategoriesPage', () => {
  let component: VendeurCategoriesPage;
  let fixture: ComponentFixture<VendeurCategoriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VendeurCategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
