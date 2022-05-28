import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { ApiService } from "src/app/api.service";
import { Item } from "src/app/models/item.model";

@Injectable({providedIn: 'root'})
export class ItemsService implements OnInit {

    items: Item[] = [];
    items$: BehaviorSubject<Item[]>;

    constructor(private apiService: ApiService){
        this.items$ = new BehaviorSubject<Item[]>([]);  
    }
    ngOnInit(): void {
       
    }

    getItems(): Observable<Item[]> {
        return this.items$;
    }

    initItems() {
        this.apiService.fetchItems().subscribe(serviceResponse => {
            this.items = serviceResponse.data;
            this.items$.next(this.items);
        });
    }

    addItem(name: string) {
        this.apiService.storeItem(name).subscribe(serviceResponse => {
            this.items = serviceResponse.data;
            this.items$.next(this.items);
        });
    }

    deleteItem(id: number) {
        this.apiService.deleteItem(id).subscribe(serviceResponse => {
            this.items = serviceResponse.data;
            this.items$.next(this.items);
        });
    }
}