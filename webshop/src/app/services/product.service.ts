import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  dbURL = "https://webshop---04-22-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  cartChanged = new BehaviorSubject(true);

  constructor(private http: HttpClient) { }

  getProductsFromdb(){
  return this.http.get<Product[]>(this.dbURL);
  }

  addProductToDb(newProduct: Product) {
  return this.http.post(this.dbURL,newProduct)
  }

  updateProductsInDb(updatedProducts: Product[]) {
  return this.http.put(this.dbURL, updatedProducts);
  }
}
