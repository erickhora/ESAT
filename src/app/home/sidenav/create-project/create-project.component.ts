import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Projeto } from '../../../models/projeto.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  createProjectForm: FormGroup;
  cadastroPreenchido = false;
  downloadTabelaFeito = false;
  closeResult: string;
  @Input() public projetos;
  @Output() dadosInseridos: EventEmitter<any> = new EventEmitter();

  constructor( private modalService: NgbModal, private fb: FormBuilder ) { }

  ngOnInit() {
    this.createProjectForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      limit: new FormControl(null, [Validators.required]),
      table: new FormControl(null, [Validators.required])
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
    console.log(this.createProjectForm);
  }
}
