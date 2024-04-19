import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectronicPage } from './electronic.page';

describe('ElectronicPage', () => {
  let component: ElectronicPage;
  let fixture: ComponentFixture<ElectronicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
