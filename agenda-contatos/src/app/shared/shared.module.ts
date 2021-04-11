import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports:[
  ModalComponent,
  ModalModule
]
})
export class SharedModule { }
