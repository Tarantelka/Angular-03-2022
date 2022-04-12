import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-muuda-toode',
  templateUrl: './muuda-toode.component.html',
  styleUrls: ['./muuda-toode.component.css']
})
export class MuudaToodeComponent implements OnInit {
  toode: any;
  muutmiseVorm: any;

  constructor() { }

  ngOnInit(): void {
const toodeNimi =  location.href.split("muuda/")[1]; // võtame URL-st tootenime
const tootedLS = localStorage.getItem("tooted"); //võtame localStorage-st kõik tooted
if (tootedLS) { //tootedLS !== null kontrollime, et tooted on olemas localStorage-st
  const tooted: any[] = JSON.parse(tootedLS); // võtame localStorage-st saadult jutumärgid ära
  this.toode =tooted.find(element => element.nimi
  .replaceAll(' ', '-')
  .toLowerCase()
  .replaceAll('õ','o') === toodeNimi);
  console.log(this.toode);
  this.muutmiseVorm = new FormGroup({ //luuakse vorm. ts sees, seega new FormGroup
   nimi: new FormControl(this.toode.nimi),  // vasaku poole kooloni ees oleva võtmega panen HTML'i
   hind: new FormControl(this.toode.hind),  // paremal pool tehakse vormi input kontroll (ligipääs) valmis 
   aktiivne: new FormControl(this.toode.aktiivne),  // mida on võimalik lugeda-muuta
  });

  // pärast vormi loomist minnakse HTML'i ja vorm pannakse seal:  [formGroup]="muutmmiseVorm"
}
  }


muudaToode() {}

}
