import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {TemplateRef} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'duotekService';
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
