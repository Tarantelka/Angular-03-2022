import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../models/cart-product.model';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/300`);
  images = [
    "https://picsum.photos/id/944/900/300",
    "https://picsum.photos/id/1011/900/300",
    "https://picsum.photos/id/984/900/300",
    "https://picsum.photos/id/931/900/300"
  ];
  products: Product[] = [];
  dbURL = "https://webshop---04-22-default-rtdb.europe-west1.firebasedatabase.app/products.json"

  kuup2ev = new Date();
  protsent = 0.5;
  rahayhik = 1000000;
  lause = "vitamin well without sugar";

  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
    this.http.get<Product[]>(this.dbURL).subscribe(response => {
      const newArray = [];
      for (const key in response) {
        this.products.push(response[key]);
      }
      // this.products = newArray;
    });
    console.log()
  }
  onAddToCart(productClicked:Product){
    const cartItemsSS = sessionStorage.getItem("cartItems");
    let cartItems: CartProduct[] = [];
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

  onSortAZ() {
    this.products.sort((a,b) => a.name.localeCompare(b.name));
      }

  onSortZA() {
    this.products.sort((a,b) => b.name.localeCompare(a.name)); 

  }

  onSortPriceAsc() {
    this.products.sort((a,b) => a.price - b.price);
  }

  onSortPriceDesc() {
    this.products.sort((a,b) => b.price - a.price);
  }
}
