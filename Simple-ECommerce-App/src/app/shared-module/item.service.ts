import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/item.model';
import { Detail } from '../model/detail.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  productList: Product[] = [
    {
      name: 'Macbook Air M1 2020',
      price: '12.000.000',
      description: 'Macbook Air',
      pictureUrl: 'macbookm1.jpeg',
      detail: {
        release: '2022-01-21',
        stock: 3,
      },
    },
    {
      name: 'Applewatch',
      price: '2.000.000',
      description: 'Real apple watch',
      pictureUrl: 'applewatch.jpeg',
      detail: {
        release: '2023-03-22',
        stock: 3,
      },
    },
    {
      name: 'iPhone 14 Pro Max',
      price: '12.000.000',
      description: 'Real iPhone',
      pictureUrl: 'ip14promax.jpeg',
      detail: {
        release: '2023-09-21',
        stock: 3,
      },
    },
  ];

  selectedItem: BehaviorSubject<Product> = new BehaviorSubject<Product>(null);
  selectedItem$ = this.selectedItem.asObservable()

  constructor() {}

  addNewItem(newProduct: { name: string; price: string; description: string; picture: string; release: string; stock: number; }) {
    console.log('test');
    console.log(newProduct);

    this.productList.push({
      name: newProduct.name,
      price: newProduct.price,
      description: newProduct.description,
      pictureUrl: newProduct.picture,
      detail: {
        release: newProduct.release,
        stock: newProduct.stock,
      },
    });
  }

  setSelectedItem(item: Product){
    this.selectedItem.next(item)
  }
}
