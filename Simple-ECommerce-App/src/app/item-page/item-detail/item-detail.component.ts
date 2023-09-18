import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/model/item.model';
import { ItemService } from 'src/app/shared-module/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit, OnDestroy {
  selectedItem: Product | null = null;

  constructor(private itemService: ItemService) { }
  ngOnDestroy(): void {
    this.itemService.selectedItem$.subscribe((item) => {
      this.selectedItem = item;
    }).unsubscribe();
  }

  ngOnInit(): void {
    this.itemService.selectedItem$.subscribe((item) => {
      this.selectedItem = item;
    })
  }

}
