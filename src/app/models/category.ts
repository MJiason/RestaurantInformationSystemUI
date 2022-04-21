export class Category {
  public id!: number;
  public name!:string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
export const categories = [
  new Category(1, "Meat"),
  new Category(2, "Garnish"),
  new Category(3, "Fish"),
  new Category(4, "Vegetarian"),
  new Category(5, "Drinks")
]
