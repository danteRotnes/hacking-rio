import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefasDiariasPage } from './tarefas-diarias.page';

const routes: Routes = [
  {
    path: '',
    component: TarefasDiariasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarefasDiariasPageRoutingModule {}
