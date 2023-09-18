import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemService } from '../shared-module/item.service';
import { Product } from '../model/item.model';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit, OnDestroy {
  selectedItem: Product | null = null;

  constructor(private itemService: ItemService) {
  }
  ngOnDestroy(): void {
    this.itemService.selectedItem$.subscribe((item) => {
      this.selectedItem = item;
    }).unsubscribe();
  }

  ngOnInit(): void {
    this.itemService.selectedItem$.subscribe((item) => {
      this.selectedItem = item;
    });
  }


}
