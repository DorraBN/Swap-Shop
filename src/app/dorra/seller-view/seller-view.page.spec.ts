import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SellerViewPage } from './seller-view.page';

describe('SellerViewPage', () => {
  let component: SellerViewPage;
  let fixture: ComponentFixture<SellerViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
