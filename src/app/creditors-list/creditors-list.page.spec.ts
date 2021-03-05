import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreditorsListPage } from './creditors-list.page';

describe('CreditorsListPage', () => {
  let component: CreditorsListPage;
  let fixture: ComponentFixture<CreditorsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreditorsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
