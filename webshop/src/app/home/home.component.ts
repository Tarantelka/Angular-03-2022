import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  dbURL = "https://webshop---04-22-default-rtdb.europe-west1.firebasedatabase.app/products.json"

  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
    this.http.get<any>(this.dbURL).subscribe(response => {
      const newArray = [];
      for (const key in response) {
        this.products.push(response[key]);
      }
      // this.products = newArray;
    });
    console.log()
  }
  onAddToCart(productClicked:any){
    const cartItemsSS = sessionStorage.getItem("cartItems");
    let cartItems: any[] = [];
    if (cartItemsSS) {
      cartItems = JSON.parse(cartItemsSS);
    }
  const index = cartItems.findIndex(element => element.product.id === productClicked.id);
  if (index >= 0) {
    cartItems[index].quantity++;
  } else {
    cartItems.push({product:productClicked, quantity: 1 });
  }

    
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

}
