import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarefasDiariasPageRoutingModule } from './tarefas-diarias-routing.module';

import { TarefasDiariasPage } from './tarefas-diarias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarefasDiariasPageRoutingModule
  ],
  declarations: [TarefasDiariasPage]
})
export class TarefasDiariasPageModule {}
