import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  dbURL = "https://webshop---04-22-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  categoriesdbURL = "https://webshop---04-22-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  productId!: number;
  products: Product[] = [];
  idUnique = false;

  categories: {categoryName: string}[] = [];

  constructor(private http: HttpClient,
    private categoryService: CategoryService,
    private productService: ProductService) { }

ngOnInit(): void {
   this.http.get<{categoryName: string}[]>(this.categoriesdbURL).subscribe(categoriesFromDb => {
      const newArray = [];
       for (const key in categoriesFromDb) {
         newArray.push(categoriesFromDb[key]);
       }
       this.categories = newArray;
     });

     this.productService.getProductsFromdb().subscribe(response => {
      const newArray = [];
      for (const key in response) {
        this.products.push(response[key]);
        
      }
       });

 }

 onCheckIdUniqueness(){
   const index = this.products.findIndex(element => element.id === this.productId );
   if (index >= 0) {
     this.idUnique = false;
   } else {
     this.idUnique = true;
   }   
 }

  onSubmit(addProductForm: NgForm) {
    this.productService.addProductToDb(addProductForm.value);
    addProductForm.reset();
  }
}
