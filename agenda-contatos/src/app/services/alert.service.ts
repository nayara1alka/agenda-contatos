import { Injectable, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertComponent } from '../shared/alert/alert.component';
import { ModalComponent } from '../shared/modal/modal.component';


export enum alertTypes{
  DANGER = 'danger',
  SUCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {


  constructor(private modalService: BsModalService) { }

  private alert(message:string, type:alertTypes){
    const bsModalRef: BsModalRef = this.modalService.show(AlertComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

  }
 
  alertDanger(message:string){
     this.alert(message, alertTypes.DANGER)
  }

  alertSucess(message:string){
    this.alert(message, alertTypes.SUCESS)
  }

  ocultar(){
    setTimeout(() => {
      this.modalService.hide();
    }, 2000);
  }


  showModal(titulo:string, msg:string, cancelar:string, confirmar:string){
    const bsModalRef: BsModalRef = this.modalService.show(ModalComponent);
    bsModalRef.content.titulo = titulo;
    bsModalRef.content.msg = msg;
    bsModalRef.content.cancelar = cancelar;
    bsModalRef.content.confirmar = confirmar;

    return (<ModalComponent>bsModalRef.content).confirmModal;
  }


}
