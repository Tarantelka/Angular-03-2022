import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { ViewProductsComponent } from './admin/view-products/view-products.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ShopsComponent } from './shops/shops.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "ostukorv", component: CartComponent},
  {path: "admin", component: AdminHomeComponent},
  {path: "admin/lisa", component: AddProductComponent},
  {path: "admin/muuda/:productID", component: EditProductComponent},
  {path: "admin/halda", component: ViewProductsComponent},
  {path: "poed", component: ShopsComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
