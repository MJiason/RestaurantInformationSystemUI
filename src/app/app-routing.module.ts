import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./components/menu/menu.component";
import {AppComponent} from "./app.component";
import {routerUrl} from "../environments/router-manger";

const routes: Routes = [
  { path: routerUrl.menu, component: MenuComponent },
  { path: 'start', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
