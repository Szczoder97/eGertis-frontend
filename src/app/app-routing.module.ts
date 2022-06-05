import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { OrderDetailComponent } from './components/orders/order-detail/order-detail.component';
import { OrderEditComponent } from './components/orders/order-edit/order-edit.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ItemsComponent } from './components/site-management/items/items.component';
import { SiteManagementComponent } from './components/site-management/site-management.component';

const routes: Routes = [
  {path: 'items', component: ItemsComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'order-edit', component: OrderEditComponent},
  {path: 'order-detail/:id', component: OrderDetailComponent},
  {path: 'management', component: SiteManagementComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
