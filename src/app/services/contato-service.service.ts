import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class ContatoServiceService {


  constructor(private http:HttpClient) { }

  listAll():Observable<any>{
    return this.http.get('http://localhost:8080/contato');
  }

  save(contato):Observable<any>{
    console.log('Contato:');
    console.log(contato);
    return this.http.post('http://localhost:8080/contato',contato);
  }

  remove(contato):Observable<any>{
    return this.http.delete('http://localhost:8080/contato/'+contato.id);
  }
}
