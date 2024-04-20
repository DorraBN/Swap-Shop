import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryViewPage } from './category-view.page';

describe('CategoryViewPage', () => {
  let component: CategoryViewPage;
  let fixture: ComponentFixture<CategoryViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
