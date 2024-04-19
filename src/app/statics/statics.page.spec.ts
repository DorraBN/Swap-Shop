import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaticsPage } from './statics.page';

describe('StaticsPage', () => {
  let component: StaticsPage;
  let fixture: ComponentFixture<StaticsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
