import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimeirosSocPage } from './primeiros-soc.page';

const routes: Routes = [
  {
    path: '',
    component: PrimeirosSocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeirosSocPageRoutingModule {}
