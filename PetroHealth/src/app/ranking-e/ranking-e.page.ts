import { NavController, MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking-e',
  templateUrl: './ranking-e.page.html',
  styleUrls: ['./ranking-e.page.scss'],
})
export class RankingEPage implements OnInit {

  constructor(private navCtrl:NavController, private menu:MenuController) { }

  ngOnInit() {
  }

  showPessoal(){
    this.navCtrl.navigateBack('ranking-p');
  }
  openFirst() {
    this.menu.enable(true, 'main-menu');
    this.menu.open('main-menu');
  }


}
