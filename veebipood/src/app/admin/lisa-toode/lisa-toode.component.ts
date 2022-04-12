import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {

  constructor() { }

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
     let tooted = [];

     let tootedLS =localStorage.getItem("tooted");
     if (tootedLS !== null) {   // tootedLS !== null
       tooted = JSON.parse(tootedLS);
    }

     tooted.push(vorm.value);


     localStorage.setItem("tooted",JSON.stringify(tooted));
    } //if-i lõpp
  } // funktsiooni lõpp
} //classi lõpp
