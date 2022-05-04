import {Component, Input} from '@angular/core';
import {Dish} from "../../../models/dish";
import {Router} from "@angular/router";
import {routerUrl} from "../../../../environments/router-manger";
import {CardService} from "../../../services/card.service";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() item!: Dish;
  constructor(
    private route: Router,
    private cardService: CardService
  ) { }

  public redirect(id: number):void{
    this.route.navigate([routerUrl.dish, id]).then();
  }

  public addToCard(): void {
      this.cardService.addToCard(this.item);
  }

}
