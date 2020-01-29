import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.css']
})
export class TabelasComponent implements OnInit {

  @Input() id: string;

  constructor() { }

  ngOnInit() {
  }

}
