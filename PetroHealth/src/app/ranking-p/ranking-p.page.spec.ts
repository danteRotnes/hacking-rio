import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RankingPPage } from './ranking-p.page';

describe('RankingPPage', () => {
  let component: RankingPPage;
  let fixture: ComponentFixture<RankingPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RankingPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
