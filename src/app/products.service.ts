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
      image: "./assets/img/produits/figurineAssurancetourix.jpg",
      title: "Figurine Assurancetourisx",
      description: "figurine du personnage Assurancetourisx",
      price: 20,

    },

    {
      id: 2,
      title: "Figurine Astérix",
      image: "./assets/img/produits/figurineAsterix.webp",
      description: "figurine du personnage du célèbre Astérix",
      price: 44.90,
    },

    {
      id: 3,
      image: "./assets/img/produits/figurineCleopatre.webp",
      title: "Figurine Cléopatre",
      description: "figurine du personnage de l'emblématique Cléopatre",
      price: 48.99,
    },

    {
      id: 4,
      image: "./assets/img/produits/figurineIdefix.webp",
      title: "Figurine Idéfix",
      description: "figurine du personnage d'Idéfix, le plus fidèle des amis de notre duo préféré",
      price: 49.90,

    },

    {
      id: 5,
      image: "./assets/img/produits/figurineObelix.webp",
      title: "Figurine Obélix",
      description: "figurine du personnage d'Obélix",
      price: 39.90,

    },

    {
      id: 6,
      image: "./assets/img/produits/figurinePanoramix.jpg",
      title: "Figurine Panoramix",
      description: "figurine du personnage Panoramix, le plus célèbre druide",
      price: 20,

    }
  ]
  
  constructor() { }
  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error('Not found');
    }
    return product;
  }
}

