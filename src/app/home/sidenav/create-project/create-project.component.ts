import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  projectForm: FormGroup;
  cadastroPreenchido = false;
  downloadTabelaFeito = false;
  closeResult: string;

  nome: string;
  descricao: string;
  limite: number;
  tabelaItens: string;

  constructor( private modalService: NgbModal, private fb: FormBuilder, private projectsService: ProjectsService ) { }

  ngOnInit() {
    this.projectForm = this.fb.group({
      nome: [this.nome, [Validators.required]],
      descricao: [this.descricao, [Validators.required]],
      limite: [this.limite, [Validators.required]],
      tabela: [this.tabelaItens, [Validators.required]]
    });
  }

  openCreateNewProject(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Close with ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any) {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onCreateProject() {
    this.nome = this.projectForm.controls.nome.value;
    this.descricao = this.projectForm.controls.descricao.value;
    this.limite = this.projectForm.controls.limite.value;
    this.tabelaItens = '';

    this.projectsService.postProject(this.nome, this.descricao, this.limite, this.tabelaItens);
  }
}
