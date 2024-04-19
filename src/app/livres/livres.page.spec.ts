import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LivresPage } from './livres.page';

describe('LivresPage', () => {
  let component: LivresPage;
  let fixture: ComponentFixture<LivresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LivresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
