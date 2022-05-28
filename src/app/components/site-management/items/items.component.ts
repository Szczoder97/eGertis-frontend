import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Item } from 'src/app/models/item.model';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  itemsSub: Subscription;
  constructor(private itemsService: ItemsService){
    this.items = [];
    this.itemsSub = this.itemsService.getItems().subscribe((items: Item[]) => {
      this.items = items;
    });
  }

  ngOnInit(): void {
    this.itemsService.initItems();
  }

  onSubmit(form: NgForm) {
    const item = form.value.name;
    this.itemsService.addItem(item);
  }

}
