import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() type? = 'success';
  @Input() message? :string;

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void { 
    
  }

}
