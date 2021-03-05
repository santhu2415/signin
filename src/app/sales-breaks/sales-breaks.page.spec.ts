import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalesBreaksPage } from './sales-breaks.page';

describe('SalesBreaksPage', () => {
  let component: SalesBreaksPage;
  let fixture: ComponentFixture<SalesBreaksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesBreaksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalesBreaksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
