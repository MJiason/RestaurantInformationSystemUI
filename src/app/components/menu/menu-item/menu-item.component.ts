import {Component, Input} from '@angular/core';
import {Dish} from "../../../models/dish";
import {Router} from "@angular/router";
import {routerUrl} from "../../../../environments/router-manger";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() item!: Dish;
  constructor(private route: Router) { }

  public redirect(id: number):void{
    this.route.navigate([routerUrl.dish, id]).then();
  }

}
