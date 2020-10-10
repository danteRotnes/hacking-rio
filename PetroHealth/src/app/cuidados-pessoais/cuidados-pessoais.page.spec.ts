import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CuidadosPessoaisPage } from './cuidados-pessoais.page';

describe('CuidadosPessoaisPage', () => {
  let component: CuidadosPessoaisPage;
  let fixture: ComponentFixture<CuidadosPessoaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuidadosPessoaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuidadosPessoaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
