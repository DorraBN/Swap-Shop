import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendeurCategoriesAjoutezComponent } from './vendeur-categories-ajoutez.component';

describe('VendeurCategoriesAjoutezComponent', () => {
  let component: VendeurCategoriesAjoutezComponent;
  let fixture: ComponentFixture<VendeurCategoriesAjoutezComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VendeurCategoriesAjoutezComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendeurCategoriesAjoutezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
