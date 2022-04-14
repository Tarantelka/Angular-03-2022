import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  lisa(vorm: any) {
    // console.log(vorm.valid);
    // console.log(vorm.invalid);
    if (vorm.valid) {
    //  console.log(vorm);
    //  console.log(vorm.value.nimi);
    //  console.log(vorm.value.hind);
    //  console.log(vorm.value.aktiivne);
    //  console.log(vorm.value.suvaline);
    //  let tooted = [];

    this.http.post(
      "https://timbulimbu-5-default-rtdb.europe-west1.firebasedatabase.app/tooted.json", vorm.value).subscribe();

    //  let tootedLS =localStorage.getItem("tooted");
    //  if (tootedLS !== null) {   // tootedLS !== null
    //    tooted = JSON.parse(tootedLS);
    // }

    //  tooted.push(vorm.value);
    //  localStorage.setItem("tooted",JSON.stringify(tooted));
    } //if-i lõpp
  } // funktsiooni lõpp
} //classi lõpp
