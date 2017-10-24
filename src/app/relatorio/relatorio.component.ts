import { Component, OnInit } from '@angular/core';
import { RelatorioService } from '../services/relatorio.service';
import { UIChart } from 'primeng/primeng'

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  sintetico;
  data:any;

  constructor(private service : RelatorioService) {
    this.data={labels:'',
  datasets:[]};
    this.sintetico=[];
   }
  
  ngOnInit() {
    this.service.relatorioSintetico().subscribe(dados => {
      this.sintetico = dados;
      this.criarDataSet();
    })
  }

  criarDataSet(){
    var qtdAtivos=0;
    var qtdInativos=0;

    for(var i of this.sintetico){
      if(i.situacao){
        qtdAtivos = i.count;
      } else {
        qtdInativos = i.count;
      }
    }   
    
    this.data = {
      labels:["Contatos Ativos","Contatos Inativos"],
      datasets:[
        {data:[qtdAtivos,qtdInativos],
          backgroundColor: [
              "#FF6384",
              "#36A2EB"
          ],
          hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB"
          ]}
      ]
    }

    console.log('dataset:');
    console.log(this.data);
    
  }

}
