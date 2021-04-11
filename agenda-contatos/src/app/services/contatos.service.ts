import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators'

import { environment } from '../../environments/environment';
import { Contatos } from '../contatos'

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  private readonly API = `${environment.baseAPI}contatos`  

  constructor(private http: HttpClient) { }

  criar(item: any){
    return this.http.post(this.API, item).pipe(take(1))
  }

  listar(){
    return this.http.get<Contatos[]>(this.API)
  }

  remover(id:any){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1))
  }


}
