import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.page.html',
  styleUrls: ['./relatorio.page.scss'],
})
export class RelatorioPage implements OnInit {

  constructor(private menu:MenuController) { }

  ngOnInit() {
  }
  openFirst() {
    this.menu.enable(true, 'main-menu');
    this.menu.open('main-menu');
  }

}
