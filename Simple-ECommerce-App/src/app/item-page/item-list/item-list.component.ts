import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/shared-module/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  productList = this.itemService.productList

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

}
