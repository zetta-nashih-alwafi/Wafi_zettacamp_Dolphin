import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { ItemService } from '../item.service';
import { Product } from 'src/app/model/item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatIconModule]
})
export class ItemCardComponent implements OnInit {
  @Output() changeToDetails = new EventEmitter<boolean>()
  @Input() productDetail: Product

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this
  }

  changeToDetail(): void {
    this.changeToDetails.emit(true);
  }

  setSelectedItem(): void {
    this.itemService.setSelectedItem(this.productDetail)
  }
}
