import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderDetail } from 'src/app/models/order-detail.model';
import { Order } from 'src/app/models/order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() order!: Order;
  

  constructor(private orderService: OrderService, private router: Router) { 
  }

  ngOnInit(): void {
  }

  onRealize(): void {
    this.orderService.realizeOrder(this.order.id);
  }

  onDelete(): void {
    this.orderService.deleteOrder(this.order.id);
  }

  onShowDetails() {
    this.router.navigate(['/order-detail', this.order.id]);
  }

}
