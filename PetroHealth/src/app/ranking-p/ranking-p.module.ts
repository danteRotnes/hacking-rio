import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RankingPPageRoutingModule } from './ranking-p-routing.module';

import { RankingPPage } from './ranking-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankingPPageRoutingModule
  ],
  declarations: [RankingPPage]
})
export class RankingPPageModule {}
