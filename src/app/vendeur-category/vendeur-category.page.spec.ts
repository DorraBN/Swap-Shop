import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendeurCategoryPage } from './vendeur-category.page';

describe('VendeurCategoryPage', () => {
  let component: VendeurCategoryPage;
  let fixture: ComponentFixture<VendeurCategoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VendeurCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
