import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjoutervendeurPage } from './ajoutervendeur.page';

describe('AjoutervendeurPage', () => {
  let component: AjoutervendeurPage;
  let fixture: ComponentFixture<AjoutervendeurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjoutervendeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
