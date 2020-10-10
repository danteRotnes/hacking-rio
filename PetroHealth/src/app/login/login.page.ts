import { NavController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  
  usuario:string;
  senha:string;

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async login(){
    if (this.usuario == undefined){
      const toast = await this.toastCtrl.create({
        message: 'Preencha o usuário',
        duration: 2000,
        color: 'warning'
      });  
      toast.present();  
      return;    
    }
    if (this.senha == undefined){
      const toast = await this.toastCtrl.create({
        message: 'Preencha a senha',
        duration: 2000,
        color: 'warning'
      });   
      toast.present();   
      return;  
    }
    if(this.usuario == "Petrohealth" && this.senha == "petrohealth123"){
      this.navCtrl.navigateForward('tarefas-diarias');
      const toast = await this.toastCtrl.create({
        message: 'Logado com sucesso!!',
        duration: 2000,
        color: 'success'
      });   
      toast.present(); 
    }
  }
}
