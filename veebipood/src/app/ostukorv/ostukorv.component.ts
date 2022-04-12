import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
ostukorviTooted: any[] = [];
koguSumma = 0;

// string = "Sõnaline muutuja";
// number =22;
// boolean = true;

// klasside(erinevate node_module võimaluste)  ühendamine selle componentide külge
constructor(private http: HttpClient) {}

// UUE MUUTUJA TEKITAMINE (uus väärtus ja sellele viitav sõna)
// 1. sulgude sees --  toode -- ta saab väärtuse HTML-s (click)="kustutaToode('S')"
             // HTML-st saadetakse väärtus
// 2. const või let abil -- j2rjekorranumber  -- saab väärtuse funktsiooni sees
             // nähtav ainult funktsiooni sees
// 3. klassimuutuja --  ostukorviTooted -- saab väärtuse export class all
             // saan saata HTMLi ja funktsioonid saavad seda muutujat kätte this. abil
           // "S"  
kustutaToode(toode:any) {
 // js delete element from array --stackoverflow
 //codegrepper.com

 //find index with .indexOf mozilla indexOf
 //remove with .splice() mozilla splice
              //[ "C", "F", "S", "V", "VW"] .indexOf("S");
              //    2
 // const j2rjekorranNumber = 2
 // ostukorviTooted.splice(2,1)
              
 const j2rjekorraNumber = this.ostukorviTooted.indexOf(toode);
 this.ostukorviTooted.splice(j2rjekorraNumber,1);
 sessionStorage.setItem("ostukorviTooted", JSON.stringify(this.ostukorviTooted))
 this.arvutaKogusumma();
}

lisaToode (toode: any) {
//console.log("töötab");
//console.log(toode);
//["Coca cola", "Fanta", "Sprite", "Vichy", "Vitamin well"];

this.ostukorviTooted.push(toode);
sessionStorage.setItem("ostukorviTooted", JSON.stringify(this.ostukorviTooted))
this.arvutaKogusumma();
}

tyhjendaTooted () {
  this.ostukorviTooted = [];
  sessionStorage.setItem("ostukorviTooted", JSON.stringify(this.ostukorviTooted))
  this.arvutaKogusumma(); // funktsioone saan kasutusele võtta this. abil
}

private arvutaKogusumma () {
  this.koguSumma = 0;
  // [{n: 'cc'}]
  this.ostukorviTooted.forEach(element => this.koguSumma = this.koguSumma + element.hind);
  //tsükli - võta kõigi toodete küljest hind ja liita see koguSummale juurde
}

//SALVESTAMINE:
//1. Andmebaas
//2. Brauseri mälu
//3. Faili kirjutamine


  ngOnInit(): void {
    console.log("pannakse Ostukorv käima");
    const ostukorvSS = sessionStorage.getItem("ostukorviTooted");
    if (ostukorvSS !== null) {
      this.ostukorviTooted = JSON.parse(ostukorvSS);
    }
      this.arvutaKogusumma();
  }

  maksma () {
    const makseAndmed = {
      "api_username": "92ddcfab96e34a5f",
      "account_name": "EUR3D1",
      "amount": this.koguSumma,
      "order_reference": Math.random() * 999999,
      "nonce": "37847239" + new Date() + Math.random() * 999999 + this.koguSumma,
      "timestamp": new Date(),
      "customer_url": "https://shop.example.com/cart"
      }
      const headers = {
        headers: new HttpHeaders(
          {
            "Authorization": 
            "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
          }
        )
      };
      this.http.post<any>("https://igw-demo.every-pay.com/api/v4/payments/oneoff",
       makseAndmed,
        headers).subscribe(tagastus => location.href = tagastus.payment_link);
  }
  // korrutaKahega (){
  //   this.number =this.number * 2;
  // }

  // muudaBoolean() {
  //   this.boolean = false;
  // }

  // tyhjendastring() {
  //   this.string = "";
  }
