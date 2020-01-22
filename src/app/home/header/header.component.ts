import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  projetoNome = 'CASA';
  valorDisponivel = 0;
  valorGasto = 0;
  orcamentoTotal = 0;

  constructor() { }

  ngOnInit() {
  }

}
