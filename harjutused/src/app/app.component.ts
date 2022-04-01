import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'harjutused';
}
// n2itaKollast = false;
// n2itaRohelist = false;
// n2itaSinist = false;
// n2itaPunast = false;

// onKlikkimisel() {
//   this.n2itaKollast = !this.n2itaKollast;
//   console.log(this.n2itaRohelist);
// }

// onHiiregaPealeMinekul() {
//   this.n2itaRohelist = true;
//   console.log(this.n2itaRohelist);
// }

// hiiregaV2lijaKl6psates() {
//   this.n2itaPunast = true;
//   console.log(this.n2itaPunast);
//   setInterval(() => {
//     this.n2itaPunast = false;
// //     console.log(this.n2itaPunast);
// //   }, 2000);
// }