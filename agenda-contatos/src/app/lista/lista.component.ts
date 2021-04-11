import { Component, OnInit, ViewChild } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Contatos } from '../contatos';
import { ContatosService } from '../services/contatos.service';
import { AlertService } from '../services/alert.service';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  preserveWhitespaces: true
})
export class ListaComponent implements OnInit {

  lista$?: Observable<Contatos[]>
  contatoSelecionado?: Contatos;

  deleteModalRef?: BsModalRef;
  ocultaModalRef?: BsModalRef;


  constructor(private modalService: BsModalService,
    private conntatosServices: ContatosService,
    public alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.lista$ = this.conntatosServices.listar();
  }

  remover(contato: any) {
    this.contatoSelecionado = contato;
    const result$ = this.alertService.showModal('Remover','Deseja remover esse contato?', 'cancelar', 'sim');
    result$?.asObservable().pipe(
      take(1),
      switchMap(result => result ? this.conntatosServices.remover(contato.id) : EMPTY)
    ).subscribe(
      sucess => {
        this.refresh();
        this.showAlertSucess();
      },
      error => {
        this.showAlertError()
      } 

    )
  }
 

  showAlertSucess(){
    this.alertService.alertSucess('Seu contato foi excluído com sucesso.')
    this.alertService.ocultar()
  }

  showAlertError(){
    this.alertService.alertDanger('Erro ao remover contato.')
    this.alertService.ocultar()
  }
  
}
