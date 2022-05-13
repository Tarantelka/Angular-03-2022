import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoriesdbURL = "https://webshop---04-22-default-rtdb.europe-west1.firebasedatabase.app/categories.json";


  constructor(private http:HttpClient) { }

  getCategoriesFromDb() {
    this.http.get<{categoryName: string}[]>(this.categoriesdbURL);
  }
}
