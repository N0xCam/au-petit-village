import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product [] = [
    {
      id: 1,
      name: "Figurine Assurancetourisx",
      desc: "figurine du personnage Assurancetourisx",
      price: 20,
      picture: "assets/img/prduits/figurineAssurancetourisx.jpg",
    },

    {
      id: 2,
      name: "Figurine Atérix",
      desc: "figurine du personnage du célèbre Astérix",
      price: 44.90,
      picture: "assets/img/prduits/figurineAsterix.webp",
    },

    {
      id: 3,
      name: "Figurine Cléopatre",
      desc: "figurine du personnage de l'emblématique Cléopatre",
      price: 48.99,
      picture: "assets/img/prduits/figurineCleopatre.webp",
    },

    {
      id: 4,
      name: "Figurine Idéfix",
      desc: "figurine du personnage d'Idéfix, le plus fidèle des amis de notre duo préféré",
      price: 49.90,
      picture: "assets/img/prduits/figurineIdefix.webp",
    },

    {
      id: 5,
      name: "Figurine Obélix",
      desc: "figurine du personnage d'Obélix",
      price: 39.90,
      picture: "assets/img/prduits/figurineObelix.webp",
    },

    {
      id: 6,
      name: "Figurine Panoramix",
      desc: "figurine du personnage Panoramix, le plus célèbre druide",
      price: 20,
      picture: "assets/img/prduits/figurinePanoramix.jpg",
    }
  ]
  constructor() { }
  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found`);
    }
    return product;
  }
}

