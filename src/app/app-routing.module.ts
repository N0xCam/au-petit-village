import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component' ;
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component' ;

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "product/:id", component: ProductsComponent},
  { path: "a-propos", component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
