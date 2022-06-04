import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiteManagementComponent } from './components/site-management/site-management.component';
import { UsersComponent } from './components/site-management/users/users.component';
import { AuthComponent } from './components/auth/auth.component';
import { NabvarComponent } from './components/navbar/navbar.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ItemsComponent } from './components/site-management/items/items.component';
import { ItemDetailComponent } from './components/site-management/items/item-detail/item-detail.component';
import { AuthInterceptor } from './auth.interceptor';
import { UserDetailComponent } from './components/site-management/users/user-detail/user-detail.component';
import { OrderComponent } from './components/orders/order/order.component';
import { OrderEditComponent } from './components/orders/order-edit/order-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    SiteManagementComponent,
    UsersComponent,
    AuthComponent,
    NabvarComponent,
    OrdersComponent,
    UserDetailComponent,
    OrderComponent,
    OrderEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
