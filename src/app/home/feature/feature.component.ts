import { Component, OnInit } from '@angular/core';
import { Tabela } from 'src/app/models/tabela.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  tabela: Tabela[] = [];

  constructor() { }

  ngOnInit() {
  }

}
