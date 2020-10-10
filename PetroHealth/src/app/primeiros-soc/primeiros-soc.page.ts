import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-primeiros-soc',
  templateUrl: './primeiros-soc.page.html',
  styleUrls: ['./primeiros-soc.page.scss'],
})
export class PrimeirosSocPage implements OnInit {

  constructor(private menu:MenuController) { }

  ngOnInit() {
  }
  openFirst() {
    this.menu.enable(true, 'main-menu');
    this.menu.open('main-menu');
  }

}
