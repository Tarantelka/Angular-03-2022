import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../models/cart-product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: CartProduct[] = [];
  koguSumma = 0;
  parcelMachines: any[] = [];
  selectedParcelMachine: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const cartItemsSS = sessionStorage.getItem("cartItems");
    if (cartItemsSS) {
      this.cartProducts = JSON.parse(cartItemsSS);
    }
    this.arvutaKogusumma();
    this.http.get<any[]>("https://www.omniva.ee/locations.json").subscribe(res =>
    this.parcelMachines = res);

    this.selectedParcelMachine = sessionStorage.getItem("parcelMachine");


  }

onDecreaseQuantity(cartProduct: any) {
  cartProduct.quantity--;
  sessionStorage.setItem("cartItems", JSON.stringify(this.cartProducts));
  this.arvutaKogusumma();
}
onIncreaseQuantity(cartProduct: any) {
  cartProduct.quantity++;
  sessionStorage.setItem("cartItems", JSON.stringify(this.cartProducts));
  this.arvutaKogusumma();
}
onRemoveProduct(cartProduct:any) {
  const index = this.cartProducts.findIndex(element => element.product.id === cartProduct.product.id);
  if (index >= 0) {
  this.cartProducts.splice(index,1);
  sessionStorage.setItem("cartItems", JSON.stringify(this.cartProducts));
  this.arvutaKogusumma();
  }

   }

private arvutaKogusumma() {
  this.koguSumma = 0;
  this.cartProducts.forEach(element => this.koguSumma = this.koguSumma + element.product.price*element.quantity)
}
removeProducts() {
  this.cartProducts = [];
  sessionStorage.setItem("cartProducts", JSON.stringify(this.cartProducts))
}   

maksma() {
  const makseAndmed = {
    "api_username": "92ddcfab96e34a5f",
    "account_name": "EUR3D1",
    "amount": this.koguSumma,
    "order_reference": Math.random() * 999999,
    "nonce": "37847239" + new Date() + Math.random() * 999999 + this.koguSumma,
    "timestamp": new Date(),
    "customer_url": "https://shop.example.com/cart"
  }
  const headers = {
    headers: new HttpHeaders(
      {
        "Authorization": 
        "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
      } 
    )
  };
  this.http.post<any>("https://igw-demo.every-pay.com/api/v4/payments/oneoff",
  makseAndmed,
   headers).subscribe(tagastus => location.href = tagastus.payment_link);

}

onParcelMachineSelected() {
sessionStorage.setItem("parcelMachine",this.selectedParcelMachine);
this.cartProducts.push({
  product: {id:11110000, name:"Pakiautomaadi tasu",price:3.5, imgSrc: "assets/locker.png", category: "", description: "", isActive: true},
  quantity: 1
   });
   sessionStorage.setItem("cartItems", JSON.stringify(this.cartProducts));
   this.calculateSumOfCart();
}

onUnselectParcelMachine() {
this.selectedParcelMachine = "";
sessionStorage.removeItem("parcelMachine");
this.onRemoveProduct({
   product:{id:11110000, name:"Pakiautomaadi tasu",price:3.5, imgSrc: "assets/locker.png", category: "", description: "", isActive: true},
quantity: 1})
}

calculateSumOfCart() {

}

}
