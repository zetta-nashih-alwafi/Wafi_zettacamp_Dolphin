import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit, OnChanges {
  productDetails = [];
  productName: string
  productPrice: string
  productPict: string
  productNameBefore: string
  productPriceBefore: string
  productPictBefore: string

  constructor() {}
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
  }

  removeCard(index: number) {
    this.productDetails.splice(index, 1);
  }

  previousValue(value: {cur: string[]; prev: string[]}){
    console.log(value.cur);
    console.log(value.prev);


    this.productName = value.prev[3];
    this.productPict = value.prev[2];
    this.productPrice = value.prev[1];
  }

  editCard() {
    // if (this.productName === 'Edited') {
    //   this.productName = SimpleChange.arguments.
    // }
    this.productName = 'Edited'
    this.productPrice = '12.234.342'
    this.productPict = 'monitor.webp'
  }

  onProductAdded(productAdd: {
    productName: string;
    productPrice: number;
    productPict: string;
  }) {
    this.productDetails.push({
      productName: productAdd.productName,
      productPrice: productAdd.productPrice,
      productPict: productAdd.productPict,
    });
  }
}
