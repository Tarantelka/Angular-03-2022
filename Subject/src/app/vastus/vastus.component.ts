import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vastus',
  templateUrl: './vastus.component.html',
  styleUrls: ['./vastus.component.css']
})
export class VastusComponent implements OnInit {
  answer: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
