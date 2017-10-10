import { Component, OnInit } from '@angular/core';
import {ContatoServiceService} from '../services/contato-service.service';
import {Message} from 'primeng/primeng';


@Component({
  selector: 'app-cadatro-contato',
  templateUrl: './cadatro-contato.component.html',
  styleUrls: ['./cadatro-contato.component.css']
})
export class CadatroContatoComponent implements OnInit {

  contato = {};
  msgs:Message[] = [];

  constructor(private service:ContatoServiceService) {
    this.contato = {
      status:true
    }  
   }

  

  ngOnInit() {
  }

  submit(){
    this.service.save(this.contato).subscribe((data) => {
      this.msgs = [];
      
      this.msgs.push({severity:'success', summary:'OK', detail:'Contato '+data.nome+' Inserido Com sucesso'});
    });
    this.contato = {
      status:true
    }  
  }

}
