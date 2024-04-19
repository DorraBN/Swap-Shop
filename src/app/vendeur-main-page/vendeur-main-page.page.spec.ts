import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendeurMainPagePage } from './vendeur-main-page.page';

describe('VendeurMainPagePage', () => {
  let component: VendeurMainPagePage;
  let fixture: ComponentFixture<VendeurMainPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VendeurMainPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
