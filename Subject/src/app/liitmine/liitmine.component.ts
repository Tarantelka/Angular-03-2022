import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-liitmine',
  templateUrl: './liitmine.component.html',
  styleUrls: ['./liitmine.component.css']
})
export class LiitmineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    console.log(form.value);
    }

}
