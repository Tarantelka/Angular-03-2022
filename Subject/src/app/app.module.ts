import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiitmineComponent } from './liitmine/liitmine.component';
import { LahutamineComponent } from './lahutamine/lahutamine.component';
import { KorrutamineComponent } from './korrutamine/korrutamine.component';
import { JagamineComponent } from './jagamine/jagamine.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VastusComponent } from './vastus/vastus.component';
import { CalculationComponent } from './calculation/calculation.component';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    LiitmineComponent,
    LahutamineComponent,
    KorrutamineComponent,
    JagamineComponent,
    NavbarComponent,
    VastusComponent,
    CalculationComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
