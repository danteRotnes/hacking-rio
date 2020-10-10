import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cuidados-pessoais',
  templateUrl: './cuidados-pessoais.page.html',
  styleUrls: ['./cuidados-pessoais.page.scss'],
})
export class CuidadosPessoaisPage implements OnInit {

  constructor(private menu:MenuController) { }

  ngOnInit() {
  }
  openFirst() {
    this.menu.enable(true, 'main-menu');
    this.menu.open('main-menu');
  }

}
