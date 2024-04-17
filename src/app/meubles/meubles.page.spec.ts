import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeublesPage } from './meubles.page';

describe('MeublesPage', () => {
  let component: MeublesPage;
  let fixture: ComponentFixture<MeublesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MeublesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
