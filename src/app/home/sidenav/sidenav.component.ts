import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/models/projeto.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  criado = true;
  isCollapsed = true;
  projeto: Projeto;
  projetos: Projeto[] = [
    {
      id: '1',
      nome: 'CASA',
      descricao: 'MUITO ENGRACADA',
      limite: 3000000,
      tabelaItens: ''
    },
    {
      id: '2',
      nome: 'PREDIO',
      descricao: 'MUITO ALTO',
      limite: 4000000,
      tabelaItens: ''
    },
    {
      id: '3',
      nome: 'CONDOMINIO',
      descricao: 'MUITO BOM',
      limite: 5000000,
      tabelaItens: ''
    }
  ];

  constructor() {}

  ngOnInit() {}

  getDados(projetoCriado) {
    this.projeto = {
      id: projetoCriado.id,
      nome: projetoCriado.nome,
      descricao: projetoCriado.descricao,
      limite: projetoCriado.limite,
      tabelaItens: projetoCriado.tabelaItens
    };
    this.projetos.push(this.projeto);
    this.criado = true;
  }
}
