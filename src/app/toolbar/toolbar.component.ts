import { Component, OnInit } from '@angular/core';
import {MenuModule,MenuItem} from 'primeng/primeng';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  itens: MenuItem[];

  constructor() { }

  ngOnInit() {

    this.itens = [
      {label: 'Cadastrar', icon: 'fa-plus' , routerLink:['cadastrar']},
      {label: 'Relatório de Atividade', icon: 'fa-pencil-square-o', routerLink:['relatorio']},
      {label: 'Listar', icon: 'fa-list', routerLink:['listar']}
  ];
  }

}
