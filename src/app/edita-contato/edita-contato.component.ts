import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContatoServiceService } from '../../app/services/contato-service.service';
import {Message} from 'primeng/primeng';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-edita-contato',
  templateUrl: './edita-contato.component.html',
  styleUrls: ['./edita-contato.component.css']
})
export class EditaContatoComponent implements OnInit {

  id;
  contato = {};
  msgs:Message[] = [];

  constructor(private route:ActivatedRoute, private service:ContatoServiceService) { }

  ngOnInit() {
    this.route.queryParams.filter(params => params.id)
    .subscribe(params => {
      this.id = params.id;
    });

    this.service.listOne(this.id).subscribe((data) => {
      this.contato = data;
    });
  }

  submit(){
    this.service.update(this.contato).subscribe((data) => {
      this.msgs = [];
      
      this.msgs.push({severity:'success', summary:'OK', detail:'Contato '+data.nome+' Atualizado Com sucesso'});
    });
  }

}
