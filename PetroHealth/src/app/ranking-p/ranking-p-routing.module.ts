import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankingPPage } from './ranking-p.page';

const routes: Routes = [
  {
    path: '',
    component: RankingPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RankingPPageRoutingModule {}
