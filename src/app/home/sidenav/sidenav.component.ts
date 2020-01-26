import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/models/projeto.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  criado = false;
  isCollapsed = false;
  // public projetos = {
  //     nome: 'Casa',
  //     descricao: 'Era uma casa muito engracada',
  //     valorTotalDisponivel: 100000,
  //     tabelaItens: 'url-para-a-tabela-de-itens'
  //   };

  constructor() {}

  ngOnInit() {}
}
