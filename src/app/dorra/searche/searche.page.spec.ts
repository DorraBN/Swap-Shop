import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchePage } from './searche.page';

describe('SearchePage', () => {
  let component: SearchePage;
  let fixture: ComponentFixture<SearchePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
