import { Component, OnInit, LOCALE_ID } from "@angular/core";
import { ProductsService } from "../products.service";
import { ActivatedRoute } from "@angular/router";
import { CommonModule} from "@angular/common";


interface Figurines {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: "app-product",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.css",
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
})

export class ProductsComponent implements OnInit {
  product?: Figurines;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((name) => {
      const productId = Number(name["id"]);
      if (productId) {
        this.product = this.productsService.getProduct(productId);
      } else {
        console.error("Not found");
      }
    });
  }
}
