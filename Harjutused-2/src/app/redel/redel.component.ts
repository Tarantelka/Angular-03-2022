import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redel',
  templateUrl: './redel.component.html',
  styleUrls: ['./redel.component.css']
})
export class RedelComponent implements OnInit {

  p6hisammud = ["eesti polka","sääreheitepolka","kannapolka","libliksamm","reilendrisamm","labajalavalss","eiderattasamm","voorsamm","kargussamm","kiiksamm"];
  constructor() { }

lisaSamm (p6hisammud: any) {
  this.p6hisammud.push(p6hisammud)
}

v6taSammtagasi (p6hisammud: any){
  const j2rjekorranNumber = this.p6hisammud.indexOf(p6hisammud);
  this.p6hisammud.splice(j2rjekorranNumber,1);
}

  ngOnInit(): void {
  }

}
