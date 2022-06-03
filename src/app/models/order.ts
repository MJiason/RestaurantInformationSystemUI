import {Time} from "@angular/common";
import {Dish} from "./dish";
import {DishCount} from "./dish-count";

export class Order {
  id!: number;
  tableNum!: string;
  time!: Date;
  comment!: string;
  orderStatus!: String;
  dishes!: DishCount[];
}
