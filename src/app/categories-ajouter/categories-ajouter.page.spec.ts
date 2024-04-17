import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesAjouterPage } from './categories-ajouter.page';

describe('CategoriesAjouterPage', () => {
  let component: CategoriesAjouterPage;
  let fixture: ComponentFixture<CategoriesAjouterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriesAjouterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
