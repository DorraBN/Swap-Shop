import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlusPage } from './plus.page';

describe('PlusPage', () => {
  let component: PlusPage;
  let fixture: ComponentFixture<PlusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
