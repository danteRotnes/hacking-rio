import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuidadosPessoaisPageRoutingModule } from './cuidados-pessoais-routing.module';

import { CuidadosPessoaisPage } from './cuidados-pessoais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuidadosPessoaisPageRoutingModule
  ],
  declarations: [CuidadosPessoaisPage]
})
export class CuidadosPessoaisPageModule {}
