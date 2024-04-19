import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewVendeurPage } from './view-vendeur.page';

describe('ViewVendeurPage', () => {
  let component: ViewVendeurPage;
  let fixture: ComponentFixture<ViewVendeurPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVendeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
