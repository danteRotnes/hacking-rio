import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RankingEPageRoutingModule } from './ranking-e-routing.module';

import { RankingEPage } from './ranking-e.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankingEPageRoutingModule
  ],
  declarations: [RankingEPage]
})
export class RankingEPageModule {}
