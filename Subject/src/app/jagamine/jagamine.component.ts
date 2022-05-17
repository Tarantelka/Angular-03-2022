import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-jagamine',
  templateUrl: './jagamine.component.html',
  styleUrls: ['./jagamine.component.css']
})
export class JagamineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

onSubmit(form:NgForm) {
console.log(form.value);
}

}
