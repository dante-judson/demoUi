import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-edita-contato',
  templateUrl: './edita-contato.component.html',
  styleUrls: ['./edita-contato.component.css']
})
export class EditaContatoComponent implements OnInit {

  id;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.filter(params => params.id)
    .subscribe(params => {
      this.id = params.id;
    });
  }

}
