import {Ingredient} from "./Ingradient";
import {Category} from "./category";

export class DishExtended {
  id!: number;
  name!: string;
  category!: Category;
  weight!: number;
  calories!: number
  price!: number;
  discount!: number;
  photo!: string;
  ingredients!: Ingredient[]
}
