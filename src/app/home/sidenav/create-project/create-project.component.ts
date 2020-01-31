import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Projeto } from '../../../models/projeto.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

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

  constructor( private modalService: NgbModal, private fb: FormBuilder, private http: HttpClient ) { }

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
    const form = JSON.stringify(this.projetoForm.value);
    this.http.post('https://esat-4daec.firebaseio.com/projetos.json', form)
      .subscribe((resposta) => {
        console.log(resposta);
      });
  }
}
