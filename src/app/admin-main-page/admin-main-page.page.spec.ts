import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminMainPagePage } from './admin-main-page.page';

describe('AdminMainPagePage', () => {
  let component: AdminMainPagePage;
  let fixture: ComponentFixture<AdminMainPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMainPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
