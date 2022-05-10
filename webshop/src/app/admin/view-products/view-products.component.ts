import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {products: any[] = [];
  dbURL = "https://webshop---04-22-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  descriptionWordCount= 3;
  originalProducts: Product [] = [];
  searchedProduct: string = "";

  constructor(private productService: ProductService) {
   }



ngOnInit(): void {
    this.productService.getProductsFromdb().subscribe(response => {
    const newArray = [];
    for (const key in response) {
      this.products.push(response[key]);
      this.originalProducts.push(response[key]);
    }
     });
    }

onFilterProducts() {
       this.products = this.originalProducts.filter(element => 
        element.name.toLowerCase().indexOf(this.searchedProduct.toLowerCase()) >= 0 ||
        element.description.toLowerCase().indexOf(this.searchedProduct.toLowerCase()) >= 0 ||
        element.id.toString().indexOf(this.searchedProduct.toLowerCase()) >= 0 
        );
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
