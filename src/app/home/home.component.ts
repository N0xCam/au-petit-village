import { Component, Input, OnInit, LOCALE_ID } from '@angular/core';

import localeFr from "@angular/common/locales/fr";
import { CommonModule, registerLocaleData } from "@angular/common";
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../products.service';

registerLocaleData(localeFr);



export interface figurines {
  id: number;
  name: string;
  desc: string;
  price: number;
  picture: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
})
export class HomeComponent  implements OnInit {
  products: figurines[] = [];
  selectedProductId: number = 1;
  searchTerm: string = "";
  order: "asc" | "desc" = "asc";

  constructor () { }

  ngOnInit(): void {
}
}
