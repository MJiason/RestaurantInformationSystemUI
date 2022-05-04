import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {CardService} from "../../../services/card.service";
import {Card} from "../../../models/card";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public count: number = 0;
  public totalCount: number = 0;
  public card!: Card;

  constructor(
    private cardService: CardService) {
  }

  ngOnInit(): void {
    this.getCard();
  }


  private getCard(): void {
    this.card = this.cardService.getCard();
    this.totalCount = this.getTotalCount();
  }

  public removeFromCard(dishId: number): void {
    this.cardService.removeFromCard(dishId);
    this.getCard();
  }

  public incCount(dishId: number): void {
    this.cardService.incDishCount(dishId);
    this.getCard();
  }

  public decCount(dishId: number): void {
    this.cardService.decDishCount(dishId);
    this.getCard();
  }

  private getTotalCount(): number {
    if (this.card.dishes.length == 0) {
      return 0;
    }
    let count = 0;
    this.card.dishes.forEach((item) => count += item.dish.price * item.count);
    return count;
  }

}
