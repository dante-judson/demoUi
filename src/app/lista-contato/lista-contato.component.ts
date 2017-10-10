import { Component, OnInit } from '@angular/core';
import {ContatoServiceService} from '../services/contato-service.service';
import {Message} from 'primeng/primeng';
import {ConfirmationService} from 'primeng/primeng';


@Component({
  selector: 'app-lista-contato',
  templateUrl: './lista-contato.component.html',
  styleUrls: ['./lista-contato.component.css']
})
export class ListaContatoComponent implements OnInit {

  contatos = [];
  contatoSelecionado;
  msgs:Message[] = [];
  constructor(private service:ContatoServiceService,private confirmationService: ConfirmationService) { 
   
  }

  listaAll(){
    this.service.listAll().subscribe((listaContatos) => {
      this.contatos = listaContatos;
    })
  }

  ngOnInit() {
    this.listaAll();
  }

  confirmar(){
    this.confirmationService.confirm({
      message:'Deseja Realmente Remover Contato Selecionado?',
      accept:() => {
        this.remover();
      }
    });
  }

  remover(){
    this.service.remove(this.contatoSelecionado).subscribe((val) =>{
      this.msgs = [];
      
      this.msgs.push({severity:'success', summary:'OK', detail:'Contato '+this.contatoSelecionado.nome+' Removido Com sucesso'});
      this.listaAll();
    });
  }

}
