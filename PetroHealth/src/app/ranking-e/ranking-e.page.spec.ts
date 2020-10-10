import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RankingEPage } from './ranking-e.page';

describe('RankingEPage', () => {
  let component: RankingEPage;
  let fixture: ComponentFixture<RankingEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingEPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RankingEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
