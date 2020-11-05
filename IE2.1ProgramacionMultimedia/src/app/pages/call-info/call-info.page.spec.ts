import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CallInfoPage } from './call-info.page';

describe('CallInfoPage', () => {
  let component: CallInfoPage;
  let fixture: ComponentFixture<CallInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CallInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
