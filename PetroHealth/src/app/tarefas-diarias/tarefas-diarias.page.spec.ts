import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TarefasDiariasPage } from './tarefas-diarias.page';

describe('TarefasDiariasPage', () => {
  let component: TarefasDiariasPage;
  let fixture: ComponentFixture<TarefasDiariasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasDiariasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TarefasDiariasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
