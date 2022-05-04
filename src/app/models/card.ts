import {Dish} from "./dish";
import {DishExtended} from "./dish-extended";

export class CardItem {
  dish!: Dish | DishExtended;
  count!: number;

  constructor(dish: Dish | DishExtended, count: number) {
    this.dish = dish;
    this.count = count;
  }
}

export class Card {
  dishes: CardItem[] = [];
}
