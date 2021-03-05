import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddemployPage } from './addemploy.page';

describe('AddemployPage', () => {
  let component: AddemployPage;
  let fixture: ComponentFixture<AddemployPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddemployPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddemployPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
