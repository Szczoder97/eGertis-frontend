import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() order!: Order;

  constructor(private orderService: OrderService) { 
  }

  ngOnInit(): void {
  }

  onRealize(): void {
    this.orderService.realizeOrder(this.order.id);
  }

  onDelete(): void {
    this.orderService.deleteOrder(this.order.id);
  }

}
