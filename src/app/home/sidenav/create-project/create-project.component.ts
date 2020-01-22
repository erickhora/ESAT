import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Projeto } from 'src/app/models/projeto.model';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  createProjectForm: FormGroup;
  cadastroPreenchido = false;
  downloadTabelaFeito = false;

  projeto: Projeto;
  nomeInput = '';
  descricaoInput = '';
  valorTotalInput = 0;

  constructor() { }

  ngOnInit() {
    this.createProjectForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      limit: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.createProjectForm);
  }
}
