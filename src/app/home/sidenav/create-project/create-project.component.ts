import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Projeto } from '../../../models/projeto.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  projetoForm: FormGroup;
  cadastroPreenchido = false;
  downloadTabelaFeito = false;
  closeResult: string;

  nome: string;
  descricao: string;
  limite: number;
  tabelaItens: string;

  @Output() dadosInseridos: EventEmitter<Projeto> = new EventEmitter();

  constructor( private modalService: NgbModal, private fb: FormBuilder ) { }

  ngOnInit() {
    this.projetoForm = this.fb.group({
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
    console.log(this.projetoForm);
    this.dadosInseridos.emit({
      id: '',
      nome: this.nome,
      descricao: this.descricao,
      limite: this.limite,
      tabelaItens: this.tabelaItens
    });
  }
}
