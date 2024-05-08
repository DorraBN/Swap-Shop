import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendeurViewPage } from './vendeur-view.page';

describe('VendeurViewPage', () => {
  let component: VendeurViewPage;
  let fixture: ComponentFixture<VendeurViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VendeurViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
