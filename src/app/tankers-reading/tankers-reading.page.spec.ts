import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TankersReadingPage } from './tankers-reading.page';

describe('TankersReadingPage', () => {
  let component: TankersReadingPage;
  let fixture: ComponentFixture<TankersReadingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankersReadingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TankersReadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
