import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderDetail } from 'src/app/models/order-detail.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  orderId!: number;
  order!: OrderDetail;
  orderSub!: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.params['id'];
    this.orderSub = this.orderService.getOrder(this.orderId).subscribe(order => {
      this.order = order;
    });
  }

  onClose() {
    this.router.navigate(['/orders']);
  }
}
