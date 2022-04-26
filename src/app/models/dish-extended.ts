import {Ingredient} from "./Ingradient";

export class DishExtended {
  id!: number;
  name!: string;
  category!: string;
  weight!: number;
  calories!: number
  price!: number;
  discount!: number;
  photo!: string;
  ingredients!: Ingredient[]
}
