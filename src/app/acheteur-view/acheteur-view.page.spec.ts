import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcheteurViewPage } from './acheteur-view.page';

describe('AcheteurViewPage', () => {
  let component: AcheteurViewPage;
  let fixture: ComponentFixture<AcheteurViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AcheteurViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
