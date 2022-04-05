import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
dogs =[
  { name: "Muri", age:10, owner: "Jüri" },
  { name: "Muki", age:5, owner: "Kalle" },
  { name: "Auh", age:7, owner: "Pille" },
  { name: "Pontu", age:1, owner: "Sille" },
  { name: "Lontu", age:14, owner: "Malle" },
]
  constructor() { }

  ngOnInit(): void {
  }

}
