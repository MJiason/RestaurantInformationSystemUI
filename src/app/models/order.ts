import {Time} from "@angular/common";
import {Dish} from "./dish";
import {DishCount} from "./dish-count";
import {OrderStatus} from "./enums/OrderStatus";

export class Order {
  id!: number;
  tableNum!: number;
  time!: Date;
  comment!: string;
  orderStatus!: OrderStatus;
  dishes!: DishCount[];
}
