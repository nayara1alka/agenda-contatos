import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() titulo?:string;
  @Input() msg?: string;
  @Input() cancelar?: string;
  @Input() confirmar?: string;

  confirmModal?: Subject<boolean>;

  constructor(private bsModalRef: BsModalRef) { }


  ngOnInit(): void {

    this.confirmModal = new Subject();
    
  }

  onConfirm(){
    this.confirmAndClose(true);
  }

  onClose(){
    this.confirmAndClose(false);
  }

  private confirmAndClose(value:boolean){
     this.confirmModal?.next(value);
    this.bsModalRef.hide()
  }

}
