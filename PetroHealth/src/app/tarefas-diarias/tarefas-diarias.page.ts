import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tarefas-diarias',
  templateUrl: './tarefas-diarias.page.html',
  styleUrls: ['./tarefas-diarias.page.scss'],
})
export class TarefasDiariasPage implements OnInit {

  constructor(private menu:MenuController) { }

  ngOnInit() {
  }
  openFirst() {
    this.menu.enable(true, 'main-menu');
    this.menu.open('main-menu');
  }

}
