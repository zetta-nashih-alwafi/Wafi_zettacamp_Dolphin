import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent implements OnInit {
  @Output() AddNewProduct = new EventEmitter<{productName: string, productPrice: string}>
  @ViewChild('productPrice') productPrice: ElementRef

  productName: string;
  productPriceCheck: string;
  productPicture: string;
  soldOut: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewProduct() {
    this.AddNewProduct.emit({productName: this.productName, productPrice: parseFloat(this.productPrice.nativeElement.value).toLocaleString('id-ID')})
    this.productName = ''
    this.productPrice.nativeElement.value = 0
  }

  checkPrice(checkPrice: HTMLInputElement) {
    this.productPriceCheck = parseFloat(checkPrice.value).toLocaleString("id-ID")
  }

  checkPicture(checkPicture: any) {
    this.productPicture = checkPicture.target.value
    console.log(this.productPicture);

  }

  isSoldOut() {
    this.soldOut = !this.soldOut
  }
}
