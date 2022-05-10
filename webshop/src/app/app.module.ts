import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { ViewProductsComponent } from './admin/view-products/view-products.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ThousandSeperatorPipe } from './pipes/thousand-seperator.pipe';
import { DescriptionSortenerPipe } from './pipes/description-sortener.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopsComponent } from './shops/shops.component';
import { CategoryComponent } from './admin/category/category.component';
import { ShopsSettingsComponent } from './admin/shops-settings/shops-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    AddProductComponent,
    EditProductComponent,
    ViewProductsComponent,
    AdminHomeComponent,
    NavbarComponent,
    ThousandSeperatorPipe,
    DescriptionSortenerPipe,
    ShopsComponent,
    CategoryComponent,
    ShopsSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({ loader: {provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] } }),
    FormsModule,
    ReactiveFormsModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {    return new TranslateHttpLoader(http);}