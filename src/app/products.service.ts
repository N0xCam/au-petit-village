import { Injectable } from '@angular/core';



export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;

}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product [] = [
    {
      id: 1,
      title: "Figurine Assurancetourisx",
      description: "figurine du personnage Assurancetourisx",
      price: 20,
      image: "./assets/img/produits/figurineAssurancetourix.jpg",
    },

    {
      id: 2,
      title: "Figurine Astérix",
      description: "figurine du personnage du célèbre Astérix",
      price: 44.90,
      image: "./assets/img/produits/figurineAsterix.webp",
    },

    {
      id: 3,
      title: "Figurine Cléopatre",
      description: "figurine du personnage de l'emblématique Cléopatre",
      price: 48.99,
      image: "./assets/img/produits/figurineCleopatre.webp",
    },

    {
      id: 4,
      title: "Figurine Idéfix",
      description: "figurine du personnage d'Idéfix, le plus fidèle des amis de notre duo préféré",
      price: 49.90,
      image: "./assets/img/produits/figurineIdefix.webp",
    },

    {
      id: 5,
      title: "Figurine Obélix",
      description: "figurine du personnage d'Obélix",
      price: 39.90,
      image: "./assets/img/produits/figurineObelix.webp",
    },

    {
      id: 6,
      title: "Figurine Panoramix",
      description: "figurine du personnage Panoramix, le plus célèbre druide",
      price: 20,
      image: "./assets/img/produits/figurinePanoramix.jpg",
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

