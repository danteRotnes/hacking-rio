import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrimeirosSocPage } from './primeiros-soc.page';

describe('PrimeirosSocPage', () => {
  let component: PrimeirosSocPage;
  let fixture: ComponentFixture<PrimeirosSocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeirosSocPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrimeirosSocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
