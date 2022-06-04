import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, RequiredValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { ItemWrapper, UpdateOrder } from 'src/app/models/update-order.model';
import { ItemsService } from '../../site-management/items/items.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  items: Item[];
  itemsSub: Subscription;

  constructor(private router: Router, private orderService: OrderService, private itemsService: ItemsService) {
    this.items = [];
    this.itemsSub = this.itemsService.getItems().subscribe((items: Item[]) => {
      this.items = items;
    });
   }

  ngOnInit(): void {
    this.itemsService.initItems();
  }
  
  onSubmit(form: NgForm) {
    let formList = form.value;
    const title = formList['title'];
    let products: ItemWrapper[] = [];
    this.items.forEach(item => {
      let name = item.name;
      products.push(new ItemWrapper(name, formList[name]))
    });
    let updateDto = new UpdateOrder(title, products);
    this.orderService.updateOrder(this.orderService.newOrderId, updateDto);
    this.router.navigate(['/orders']);
  }

  onDelete() {
    this.orderService.deleteOrder(this.orderService.newOrderId);
    this.router.navigate(['/orders']);
  }

}
