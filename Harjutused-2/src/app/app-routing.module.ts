import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedelComponent } from './redel/redel.component';

const routes: Routes = [
  { path: "redel", component: RedelComponent }
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
