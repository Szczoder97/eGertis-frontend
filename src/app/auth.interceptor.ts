import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { AuthService } from "./components/auth/auth.service";

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor, OnInit {

    token: string;
    userSub: Subscription;
    authPrefix: string;

    constructor(private authService: AuthService){
        this.authPrefix = 'Bearer ';
        this.userSub = this.authService.user$.subscribe(user => {
            this.token = user.getToken();
        })
    }

    ngOnInit(): void {    
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.token !== '') {
            const clone  = req.clone({
                headers: req.headers.set("Authorization", this.authPrefix + this.token)
            });
            return next.handle(clone);
        } else {
            return next.handle(req);
        }
    }

}