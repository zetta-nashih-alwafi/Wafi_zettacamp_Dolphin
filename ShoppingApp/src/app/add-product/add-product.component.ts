import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  productDetails = [];

  constructor() {}

  ngOnInit(): void {}

  onProductAdded(productAdd: { productName: string; productPrice: string }) {
    this.productDetails.push({
      productName: productAdd.productName,
      productPrice: productAdd.productPrice,
    });
  }
}
