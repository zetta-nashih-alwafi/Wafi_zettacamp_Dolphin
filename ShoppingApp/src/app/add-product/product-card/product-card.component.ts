import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductCardComponent implements OnInit {
  @Input() product: {productName: string; productPrice: string; productPict: string}

  constructor() { }

  ngOnInit(): void {
  }
}
