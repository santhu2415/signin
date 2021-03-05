import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PricesandstocksPage } from './pricesandstocks.page';

describe('PricesandstocksPage', () => {
  let component: PricesandstocksPage;
  let fixture: ComponentFixture<PricesandstocksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricesandstocksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PricesandstocksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
