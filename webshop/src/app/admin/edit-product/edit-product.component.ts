import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  products: Product[] = [];
  dbURL = "https://webshop---04-22-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  categoriesdbURL = "https://webshop---04-22-default-rtdb.europe-west1.firebasedatabase.app/categories.json";

  product!: Product;
  editProductForm!: FormGroup;
  categories: {categoryName: string}[] = [];


  constructor(private route: ActivatedRoute, 
    private http: HttpClient,
    private router: Router,
    private productService: ProductService) { } // Router tuleb importida
    

  ngOnInit(): void {
    const productID = this.route.snapshot.paramMap.get("productID");
    this.getProductsFromdb(productID);
    this.getCategoriesFromDb();
   }

getProductsFromdb(productID: any) {
  this.productService.getProductsFromdb().subscribe(response => {
    const newArray = [];
    for (const key in response) {
      this.products.push(response[key]);
    }
    const productFound = this.products.find(element => element.id === Number(productID));
    if (productFound) {
      this.product = productFound;
    }
    this.initEditForm();
   });
}

 private getCategoriesFromDb(){
    this.http.get<{categoryName: string}[]>(this.categoriesdbURL).subscribe(categoriesFromDb => {
      const newArray = [];
       for (const key in categoriesFromDb) {
         newArray.push(categoriesFromDb[key]);
       }
       this.categories = newArray;
     });
  }
  private initEditForm () {
    this.editProductForm = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name),
      price: new FormControl(this.product.price),
      imgSrc: new FormControl(this.product.imgSrc),
      category: new FormControl(this.product.category),
      description: new FormControl(this.product.description),
      isActive: new FormControl(this.product.isActive),      
    });
  }

  onSubmit() {
    const queueNumber = this.products.indexOf(this.product);
    this.products[queueNumber] = this.editProductForm.value;
    this.productService.updateProductsInDb(this.products).subscribe(()=>this.router.navigateByUrl("/admin/halda") );
  }
}
