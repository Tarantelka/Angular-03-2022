import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {products: any[] = [];
  dbURL = "https://webshop---04-22-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  product: any;


  constructor(private route: ActivatedRoute, 
    private http: HttpClient,
    private router: Router) { } // Router tuleb importida

  ngOnInit(): void {
    const productID = this.route.snapshot.paramMap.get("productID");
    console.log(productID);
  this.http.get<any>(this.dbURL).subscribe(response => {
    const newArray = [];
    for (const key in response) {
      this.products.push(response[key]);
    }
    console.log("siia jõuan hiljem, kuigi üleva pool")
    //SIIN PEAN .FIND TEGEMA
    this.product = this.products.find(element => element.id === Number(productID));
    //SIIN PEAN FORMSGROUP LOOMA
   });
  //  this.products.find()
   console.log(this.products);
  }

  onSubmit() {
    this.router.navigateByUrl("/admin/tooted");
  }
}
