import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item!: Item;

  constructor(private itemsService: ItemsService){};

  ngOnInit(): void {
  }

  onDelete() {
    this.itemsService.deleteItem(this.item.id);
  }
}
