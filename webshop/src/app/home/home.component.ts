import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CartProduct } from '../models/cart-product.model';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

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
  categories: string[] = [];
  selectedCategory = "";
  originalProducts:Product[]=[];
  loggedIn = false;

  // kuup2ev = new Date();
  // protsent = 0.5;
  // rahayhik = 1000000;
  // lause = "vitamin well without sugar";

  constructor(private http: HttpClient,
    private productService: ProductService,
    private authService: AuthService) {
   }

  ngOnInit(): void {
    this.productService.getProductsFromdb().subscribe(response => {
      const newArray = [];
      for (const key in response) {
        this.products.push(response[key]);
        this.originalProducts.push(response[key]);
      }
      // this.products = newArray;
      this.categories = this.products.map(element => element.category);
      this.categories = [...new Set(this.categories)];
    });
    
    this.authService.loggedInChanged.subscribe(loggedInFromSubject => {
      this.loggedIn = loggedInFromSubject;
    })


  }

  onFilterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === '') {
      this.products = this.originalProducts;
    } else {
      this.products = this.originalProducts.filter(element => element.category === category);
    }
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
    const parcelMachineIndex = cartItems.findIndex(element => element.product.id === 11110000)
    if (parcelMachineIndex >= 0) {
      cartItems.splice(parcelMachineIndex,0,{product:productClicked, quantity: 1 });
    } else {
      cartItems.push({product:productClicked, quantity: 1 });
    }
    
  }

    
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    this.productService.cartChanged.next(true);
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
