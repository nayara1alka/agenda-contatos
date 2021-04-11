import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../services/alert.service';
import { ContatosService } from '../services/contatos.service';
import { IformDeactivate } from '../form/iform-deactivate'
import { switchMap, take } from 'rxjs/operators';

import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  preserveWhitespaces: true
})
export class FormComponent implements OnInit, IformDeactivate {

  form?: FormGroup;
  submitted: boolean = false;

 private formMudou: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private contatosServices: ContatosService,
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.maxLength(250)]],
      sobrenome: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
      dataNascimento: [null, [Validators.required]],
      endereco: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.form?.valid) {
      this.contatosServices.criar(this.form.value).subscribe(
        sucess => {
          this.reset();
          this.showAlertSucess();
        },
        error => {
          this.showAlertError();
        })
    }
  }

  hasError(item: string) {
    return this.form?.get(item)?.errors;
  }

  verificarCampo(campo: string) {
    return (!this.form?.get(campo)?.valid && (this.form?.get(campo)?.touched || this.form?.get(campo)?.dirty))

  }

  showAlertSucess() {
    this.alertService.alertSucess('Seu contato foi criado com sucesso')
    this.alertService.ocultar()
  }

  showAlertError() {
    this.alertService.alertDanger('Erro ao criar contato')
    this.alertService.ocultar()
  }

  reset() {
    this.submitted = false;
    return this.form?.reset();
  }


  onInput() {
    this.formMudou = true;
  }

  showModals() {
    const resultado$ = this.alertService.showModal('Confirmar', 'Tem certeza que deseja sair dessa página?', 'cancelar', 'sair');
    resultado$?.asObservable().pipe(take(1)).subscribe();

    return resultado$;

  }

  podeMudarRota() {
    if(this.formMudou){
      return this.showModals()
    }
    return true;
   }

  podeDesativar() {
    return this.podeMudarRota()

  }


}

