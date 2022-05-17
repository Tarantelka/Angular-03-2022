import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-korrutamine',
  templateUrl: './korrutamine.component.html',
  styleUrls: ['./korrutamine.component.css']
})
export class KorrutamineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    console.log(form.value);
    }

}
