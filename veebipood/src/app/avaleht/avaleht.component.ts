import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {

  tooted = [
    {nimi: " Coca cola", hind:2, aktiivne: true},
    {nimi: "Fanta", hind:3, aktiivne: true},
    {nimi:"Sprite", hind:2.5, aktiivne: true}, 
    {nimi: "Vichy", hind:4, aktiivne: true},
    {nimi: "Vitamin well", hind:6, aktiivne: true}
  ];


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // const tootedLS =localStorage.getItem("tooted");
    // if (tootedLS) {
    //   this.tooted = JSON.parse(tootedLS);
    this.http.get<any>("https://timbulimbu-5-default-rtdb.europe-west1.firebasedatabase.app/tooted.json")
    .subscribe(tootedFB => {
      const uusMassiiv = [];
      for (const key in tootedFB) {
        uusMassiiv.push(tootedFB[key]);
          
        }
        this.tooted =uusMassiiv;
        })
    }
  

       // 1.{n: "C", h: 2}
       // 2.{n: "F", h: 3}
lisaOstukorvi(toode: any) {
  const ostukorvSS = sessionStorage.getItem("ostukorviTooted");
  let ostukorv = [];
  if (ostukorvSS !== null) { // null - tühjus     !== ei võrdu tühjus
    // 2.     = JSON.parse( "[{n: "C, h:2}])
  ostukorv = JSON.parse(ostukorvSS);
  }  
  ostukorv.push(toode);
  sessionStorage.setItem("ostukorviTooted",JSON.stringify(ostukorv));
}

}