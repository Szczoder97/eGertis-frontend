import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ApiService } from "src/app/api.service";
import { Order } from "src/app/models/order.model";
import { UpdateOrder } from "src/app/models/update-order.model";

@Injectable({providedIn: 'root'})
export class OrderService {

    orders: Order[] = [];
    unrealizedOrders: Order[] = [];
    unrealizedOrders$: BehaviorSubject<Order[]>;
    realizedOrders: Order[] = [];
    realizedOrders$: BehaviorSubject<Order[]>;
    newOrderId!: number;
    

    constructor(private apiService: ApiService){
        this.unrealizedOrders$ = new BehaviorSubject<Order[]>([]);
        this.realizedOrders$ = new BehaviorSubject<Order[]>([]);
    }

    getRealizedOrders(): Observable<Order[]> {
        return this.realizedOrders$;
    }
    
    getUnrealizedOrders(): Observable<Order[]> {
        return this.unrealizedOrders$;
    }

    initOrders() {
        this.orders = [];
        this.realizedOrders = [];
        this.unrealizedOrders = [];
        this.apiService.fetchOrders().subscribe(response => {
            this.orders = response.data;
            this.orders.forEach(o => this.manageOrder(o));
            this.unrealizedOrders$.next(this.unrealizedOrders);
            this.realizedOrders$.next(this.realizedOrders);
        });
    }

    addOrder() {
        this.orders = [];
        this.realizedOrders = [];
        this.unrealizedOrders = [];
        this.apiService.createOrder().subscribe(response => {
            this.newOrderId = response.data.id;
        });
    }

    realizeOrder(id: number) {
        this.orders = [];
        this.realizedOrders = [];
        this.unrealizedOrders = [];
        return this.apiService.ralizeOrder(id).subscribe(response => {
            this.orders = response.data;
            this.orders.forEach(o => this.manageOrder(o));
            this.unrealizedOrders$.next(this.unrealizedOrders);
            this.realizedOrders$.next(this.realizedOrders);
        });
    }

    updateOrder(id: number, dto: UpdateOrder) {
        this.orders = [];
        this.realizedOrders = [];
        this.unrealizedOrders = [];
        return this.apiService.updateOrder(id, dto).subscribe(response => {
            this.orders = response.data;
            this.orders.forEach(o => this.manageOrder(o));
            this.unrealizedOrders$.next(this.unrealizedOrders);
            this.realizedOrders$.next(this.realizedOrders);
        });
    }

    deleteOrder(id: number) {
        this.orders = [];
        this.realizedOrders = [];
        this.unrealizedOrders = [];
        return this.apiService.deleteOrder(id).subscribe(response => {
            this.orders = response.data;
            this.orders.forEach(o => this.manageOrder(o));
            this.unrealizedOrders$.next(this.unrealizedOrders);
            this.realizedOrders$.next(this.realizedOrders);
        });
    }

    private manageOrder(order: Order) {
        order.creationDate = order.creationDate.substring(0,10);
        if (order.isRealized) {
            this.realizedOrders.push(order);
        } else {
            this.unrealizedOrders.push(order);
        }
    }
}