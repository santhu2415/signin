import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PumpReadingsPage } from './pump-readings.page';

describe('PumpReadingsPage', () => {
  let component: PumpReadingsPage;
  let fixture: ComponentFixture<PumpReadingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PumpReadingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PumpReadingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
