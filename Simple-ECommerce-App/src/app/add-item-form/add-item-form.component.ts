import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ItemService } from '../shared-module/item.service';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatIconModule]
})
export class AddItemFormComponent implements OnInit {
  @Output() sectionChanged = new EventEmitter<string>();

  @ViewChild('productName') productName: ElementRef;
  @ViewChild('productPrice') productPrice: ElementRef;
  @ViewChild('productDescription') productDescription: ElementRef;
  @ViewChild('productReleaseDate') productReleaseDate: ElementRef;
  @ViewChild('productStock') productStock: ElementRef;

  productPriceCheck: string;
  productPict: string;
  soldOut: boolean = false;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  addNewProduct(e) {
    let newProduct = {
      name: this.productName.nativeElement.value,
      price: parseFloat(this.productPrice.nativeElement.value).toLocaleString("id-ID"),
      description: this.productDescription.nativeElement.value,
      picture: this.productPict,
      release: this.productReleaseDate.nativeElement.value,
      stock: this.productStock.nativeElement.value
    }
    this.itemService.addNewItem(newProduct)
    e.preventDefault();

    this.sectionChanged.emit('homepage')
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
