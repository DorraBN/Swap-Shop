import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditVendeurPage } from './edit-vendeur.page';

describe('EditVendeurPage', () => {
  let component: EditVendeurPage;
  let fixture: ComponentFixture<EditVendeurPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVendeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
