import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import localeFr from "@angular/common/locales/fr";
import { CommonModule, registerLocaleData } from "@angular/common";
import { ProductsService } from '../products.service';
import { SortByNamePipe } from '../sort-by-name.pipe';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { Router } from '@angular/router';

registerLocaleData(localeFr);

export interface Figurines {
  image: string;
  id: number;
  title: string;
  description: string;
  price: number;

}


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [CommonModule, FormsModule, SortByNamePipe, SortByPricePipe],
  styleUrl: './home.component.css',
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
})
export class HomeComponent  implements OnInit {
  products: Figurines[] = [];
  selectedProductId: number = 1;
  searchfig: string = "";
  order: "asc" | "desc" = "asc";

  constructor (
    private router: Router,
    private productsService: ProductsService,
  ) { }

  triFigurines(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    if (value === "asc" || value === "desc") {
      this.order = value;
    }
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  showFigurines(productId: number) {
    this.selectedProductId = productId;
    this.router.navigate(["/product", productId]);
  }
}

