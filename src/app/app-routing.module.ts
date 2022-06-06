import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./components/menu/menu.component";
import {routerUrl} from "../environments/router-manger";
import {DishComponent} from "./components/dish/dish.component";
import {DishEditComponent} from "./components/dish-edit/dish-edit.component";
import {KitchenComponent} from "./components/kitchen/kitchen.component";
import {WaiterComponent} from "./components/waiter/waiter.component";
import {WaiterOrdersComponent} from "./components/waiter/waiter-orders/waiter-orders.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {LoginComponent} from "./components/login/login.component";



const routes: Routes = [
  { path: routerUrl.menu, component: MenuComponent },
  { path: routerUrl.dish, component: DishComponent },
  { path: routerUrl.dishEdit, component: DishEditComponent },
  { path: routerUrl.kitchen, component: KitchenComponent },
  { path: routerUrl.waiter, component: WaiterComponent },
  { path: routerUrl.table, component: WaiterOrdersComponent },
  { path: routerUrl.login, component: LoginComponent },
  { path: routerUrl.emptyPath, component: LoginComponent },
  { path: routerUrl.pageNotFound, component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
