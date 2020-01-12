import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  fechar = false;
  criado = false;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  openCreateNewProject(content) {
    this.modalService.open(content, {
      centered: true,
      beforeDismiss: () => {
        return this.fechar;
      }
    });
  }

  onClose(fechar: boolean) {
    this.fechar = fechar;
  }
}
