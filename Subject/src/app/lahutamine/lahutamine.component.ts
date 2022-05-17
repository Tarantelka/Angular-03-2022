import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lahutamine',
  templateUrl: './lahutamine.component.html',
  styleUrls: ['./lahutamine.component.css']
})
export class LahutamineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    console.log(form.value);
    }

}
