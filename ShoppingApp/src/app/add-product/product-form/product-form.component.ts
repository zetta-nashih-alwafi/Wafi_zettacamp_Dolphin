import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ProductFormComponent implements OnInit {
  @Output() AddNewProduct = new EventEmitter<{productName: string, productPrice: string, productPict: string}>
  @ViewChild('productPrice') productPrice: ElementRef

  productName: string;
  productPriceCheck: string;
  productPict: string;
  soldOut: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewProduct() {
    this.AddNewProduct.emit({productName: this.productName, productPrice: parseFloat(this.productPrice.nativeElement.value).toLocaleString('id-ID'), productPict: this.productPict})
    this.productName = ''
    this.productPrice.nativeElement.value = 0
    this.productPict = ''
  }

  checkPrice(checkPrice: HTMLInputElement) {
    this.productPriceCheck = parseFloat(checkPrice.value).toLocaleString("id-ID")
  }

  checkPicture(checkPicture: any) {
    let pictureCheck = checkPicture.target.value
    pictureCheck = pictureCheck.split("\\")
    this.productPict = pictureCheck[pictureCheck.length - 1]
  }

  isSoldOut() {
    this.soldOut = !this.soldOut
  }
}
