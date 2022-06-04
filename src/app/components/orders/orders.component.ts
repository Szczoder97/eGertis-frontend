import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { OrderService } from './order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  realizedOrders: Order[] = [];
  unrealizedOrders: Order[] = [];
  realizedOrdersSub: Subscription;
  unrealizedOrdersSub: Subscription;

  constructor(private orderService: OrderService, private router: Router) { 
    this.orderService.initOrders();
    this.realizedOrdersSub = this.orderService.getRealizedOrders().subscribe(orders => {
      this.realizedOrders = orders;
    });
    this.unrealizedOrdersSub = this.orderService.getUnrealizedOrders().subscribe(orders => {
      this.unrealizedOrders = orders;
    });
  }

  ngOnInit(): void {
  }

  onCreate() {
    this.orderService.addOrder();
    this.router.navigate(['/order-edit']);
  }

}
