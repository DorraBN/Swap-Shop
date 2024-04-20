import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyersPage } from './buyers.page';

describe('BuyersPage', () => {
  let component: BuyersPage;
  let fixture: ComponentFixture<BuyersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
