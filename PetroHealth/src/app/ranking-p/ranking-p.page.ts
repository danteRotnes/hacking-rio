import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking-p',
  templateUrl: './ranking-p.page.html',
  styleUrls: ['./ranking-p.page.scss'],
})
export class RankingPPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  showEquipe(){
    this.navCtrl.navigateForward('ranking-e');
  }

}
