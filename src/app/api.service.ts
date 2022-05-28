import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ChangeRole } from "./models/change-role.model";
import { ServiceResponse } from "./models/ServiceResponse.model";

@Injectable({providedIn: 'root'})
export class ApiService {

    constructor(private http: HttpClient){}

    storeItem(name: string) {
        const item = {name: name};
        return this.http.post<ServiceResponse>('https://localhost:5001/item', item);
    }

    fetchItems() {
        return this.http.get<ServiceResponse>('https://localhost:5001/item');
    }

    deleteItem(id: number) {
        return this.http.delete<ServiceResponse>('https://localhost:5001/item/' + id);
    }

    fetchUsers() {
        return this.http.get<ServiceResponse>('https://localhost:5001/user');
    }

    changeUserRole(changeRole: ChangeRole) {
        return this.http.put<ServiceResponse>('https://localhost:5001/user', changeRole);
    }

    deleteUser(id: number) {
        return this.http.delete<ServiceResponse>('https://localhost:5001/user/' + id);
    }
}