import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCreditorsPage } from './add-creditors.page';

describe('AddCreditorsPage', () => {
  let component: AddCreditorsPage;
  let fixture: ComponentFixture<AddCreditorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCreditorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCreditorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
