import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/models/projeto.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  criado = true;
  isCollapsed = true;
  projeto: Projeto;
  projetos: Projeto[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getDados(projetoCriado) {
    this.projeto = {
      id: projetoCriado.id,
      nome: projetoCriado.nome,
      descricao: projetoCriado.descricao,
      limite: projetoCriado.limite,
      tabelaItens: projetoCriado.tabelaItens
    };
    // console.log(`o objeto eh esse: id: ${this.projeto.id}, nome: ${this.projeto.nome}, descricao: ${this.projeto.descricao},
    // limite: ${this.projeto.limite}, url da tabela: ${this.projeto.tabelaItens}`);
    // this.projetos.push(this.projeto);
    // this.http.get('https://esat-4daec.firebaseio.com/projetos.json', );
    this.criado = true;
  }
}
