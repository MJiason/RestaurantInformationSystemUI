import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./components/menu/menu.component";
import {routerUrl} from "../environments/router-manger";
import {DishComponent} from "./components/dish/dish.component";

const routes: Routes = [
  { path: routerUrl.menu, component: MenuComponent },
  { path: routerUrl.dish, component: DishComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
