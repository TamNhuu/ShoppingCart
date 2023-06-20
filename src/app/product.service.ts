import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  products: Product[] = [
    {
      id: 1,
      name: 'Iphone 14, 256GB',
      description: 'Face ID and 5G support',
      thumbnail: '../../assets/img/iphone-14-pro-max-600x600.jpg',
      price: 1000,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Iphone 13, 128GB',
      description: 'compact version of the iPhone 13 series',
      thumbnail: '../../assets/img/iphone-13-mini-pink-600x600.jpg',
      price: 1000,
      quantity: 1,
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  findById(id: number): Product {
    return this.products.find((product) => product.id == id)!;
  }

  findIndexById(id: number): number {
    return this.products.findIndex((product) => product.id == id);
  }

  updateQuantity(id: number, quantity: number) {
    const product = this.findById(id);
    if (product) {
      product.quantity = quantity || 0;
    }
  }

  removeProduct(id: number): boolean {
    const index = this.findIndexById(id);
    if (index != -1) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  }
}
