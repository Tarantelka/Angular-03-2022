import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {

string = "Sõnaline muutuja";
number =22;
boolean = true;


constructor() {
  console.log( "pannakse Ostukorv käima");
}


  ngOnInit(): void {
    console.log("pannakse Ostukorv käima");
  }

  korrutaKahega (){
    this.number =this.number * 2;
  }

  muudaBoolean() {
    this.boolean = false;
  }

  tyhjendastring() {
    this.string = "";
  }
}
