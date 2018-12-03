import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaConteudosPage } from '../lista-conteudos/lista-conteudos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  abrir(){
    this.navCtrl.setRoot(ListaConteudosPage);
  }


}
