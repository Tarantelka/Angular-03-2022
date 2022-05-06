import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  dbURL = "https://webshop---04-22-default-rtdb.europe-west1.firebasedatabase.app/products.json"

  constructor(private http: HttpClient) { }

  getProductsFromdb(){
    return this.http.get<Product[]>(this.dbURL);
  }
}
