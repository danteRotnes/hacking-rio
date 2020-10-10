import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankingEPage } from './ranking-e.page';

const routes: Routes = [
  {
    path: '',
    component: RankingEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RankingEPageRoutingModule {}
