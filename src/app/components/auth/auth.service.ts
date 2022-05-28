import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, tap } from "rxjs";
import { Login } from "src/app/models/login.model";
import { Register } from "src/app/models/register.model";
import { ServiceResponse } from "src/app/models/ServiceResponse.model";
import { User } from "src/app/models/user.model";

@Injectable({providedIn: 'root'})
export class AuthService {

    user$ = new BehaviorSubject(new User(''));

    constructor(private http: HttpClient) {
    }

    login(credentials: Login) {
       return this.http.post<ServiceResponse>('https://localhost:5001/auth/login', credentials)
        .pipe(tap(serviceResponse => {
            const user = new User(serviceResponse.data);
            this.user$.next(user);
        }));
    }
    register(credentials: Register) {
        return this.http.post<ServiceResponse>('https://localhost:5001/auth/register', credentials);
    }

    logout() {
        this.user$.next(new User(''));
    }
}