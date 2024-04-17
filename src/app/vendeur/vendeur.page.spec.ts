import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendeurPage } from './vendeur.page';

describe('VendeurPage', () => {
  let component: VendeurPage;
  let fixture: ComponentFixture<VendeurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VendeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
