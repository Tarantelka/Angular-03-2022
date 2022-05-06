import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  dbURL = "https://webshop---04-22-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  categories: {categoryName: string} [] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<{categoryName: string}[]>(this.dbURL).subscribe(categoriesFromDb => {
      const newArray = [];
      for (const key in categoriesFromDb) {
        newArray.push(categoriesFromDb[key]);
      }
      this.categories = newArray;
    });
  }

  onSubmit(addCategoryForm: NgForm) {
    this.http.post(this.dbURL, addCategoryForm.value).subscribe(() => {
      this.categories.push(addCategoryForm.value)});
  }

  onDeleteCategory(category: {categoryName: string}) {
    const index = this.categories.findIndex(element => element.categoryName === category.categoryName);
    this.categories.splice(index,1);
    this.http.put(this.dbURL,this.categories).subscribe();
  }

}
