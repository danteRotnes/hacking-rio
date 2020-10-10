import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeirosSocPageRoutingModule } from './primeiros-soc-routing.module';

import { PrimeirosSocPage } from './primeiros-soc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimeirosSocPageRoutingModule
  ],
  declarations: [PrimeirosSocPage]
})
export class PrimeirosSocPageModule {}
