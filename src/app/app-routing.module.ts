import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ItemsComponent } from './components/site-management/items/items.component';
import { SiteManagementComponent } from './components/site-management/site-management.component';

const routes: Routes = [
  {path: 'items', component: ItemsComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'management', component: SiteManagementComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
