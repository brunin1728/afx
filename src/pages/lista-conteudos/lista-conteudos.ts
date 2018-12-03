import { ConteudohtmlPage } from './../conteudohtml/conteudohtml';
import { VerPdfPage } from './../ver-pdf/ver-pdf';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';





@IonicPage()
@Component({
  selector: 'page-lista-conteudos',
  templateUrl: 'lista-conteudos.html',
  providers: [
    ApiProvider
  ]
})
export class ListaConteudosPage {
   public lista: any;
  loader: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public ApiProvider: ApiProvider,
    ) {
  }

abrirPdf(id){
  this.navCtrl.push(ConteudohtmlPage, { id: id});
}


  AbreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando..."
    });
    this.loader.present();
  }

FechaCarregando(){
  this.loader.dismiss();
}








  ionViewDidEnter() {

    this.AbreCarregando();
    this.ApiProvider.GetConteudos().subscribe(data=>{

       const response = (data as any);
       const objeto_retorno = JSON.parse(response._body);

         this.lista = objeto_retorno.DADOS;

 //console.log(this.lista);


      this.FechaCarregando();

   },error=>{
     console.log(error);
     this.FechaCarregando();
   }

   )


  }

}
