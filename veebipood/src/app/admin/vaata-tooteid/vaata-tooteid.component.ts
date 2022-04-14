import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaata-tooteid',
  templateUrl: './vaata-tooteid.component.html',
  styleUrls: ['./vaata-tooteid.component.css']
})
export class VaataTooteidComponent implements OnInit {
  tooted: any[] = [
    // {nimi: " Coca cola", hind:2, aktiivne: true},
    // {nimi: "Fanta", hind:3, aktiivne: true},
    // {nimi:"Sprite", hind:2.5, aktiivne: true}, 
    // {nimi: "Vichy", hind:4, aktiivne: true},
    // {nimi: "Vitamin well", hind:6, aktiivne: true}
  ];

 

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
            
    this.http.get<any>("https://timbulimbu-5-default-rtdb.europe-west1.firebasedatabase.app/tooted.json")
                     .subscribe(tootedFB => {
    const uusMassiiv = [];
    for (const key in tootedFB) {
      uusMassiiv.push(tootedFB[key]);        
      }
      this.tooted =uusMassiiv;
      })
  //   const tootedLS =localStorage.getItem("tooted");
  // if (tootedLS) {
  //   this.tooted = JSON.parse(tootedLS);
  // }
}

kustutaToode(toode: any) {
  
  const j2rjekorranumber =this.tooted.indexOf(toode);
  
  this.tooted.splice(j2rjekorranumber, 1);
  
  this.http.put(
    "https://timbulimbu-5-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",this.tooted).subscribe();
  // localStorage.setItem("tooted", JSON.stringify(this.tooted));
}

}
