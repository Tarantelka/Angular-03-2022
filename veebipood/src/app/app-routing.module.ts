import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { AdminKoduComponent } from './admin/admin-kodu/admin-kodu.component';
import { VaataTooteidComponent } from './admin/vaata-tooteid/vaata-tooteid.component';
import { MuudaToodeComponent } from './admin/muuda-toode/muuda-toode.component';
import { LisaToodeComponent } from './admin/lisa-toode/lisa-toode.component';

const routes: Routes = [
  // localhost:4200/   avaleht.component.html -> avaleht.css ja avaleht.ts
  { path: "", component: AvalehtComponent },
  // localhost:4200/ostukorv   ostukorv.component.html -> ostukorv.css ja ostukorv.ts
  { path: "admin", component: AdminKoduComponent },
  { path: "admin/lisa", component: LisaToodeComponent },
  { path: "admin/vaata", component: VaataTooteidComponent },
  { path: "admin/muuda", component: MuudaToodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
