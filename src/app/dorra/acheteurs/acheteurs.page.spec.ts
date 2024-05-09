import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcheteursPage } from './acheteurs.page';

describe('AcheteursPage', () => {
  let component: AcheteursPage;
  let fixture: ComponentFixture<AcheteursPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AcheteursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
