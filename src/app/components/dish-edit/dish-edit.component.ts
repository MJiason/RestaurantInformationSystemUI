import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Ingredient} from "../../models/Ingradient";
import {DishExtended} from "../../models/dish-extended";
import {ActivatedRoute} from "@angular/router";
import {DishService} from "../../services/dish.service";
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {IngredientService} from "../../services/ingredient.service";
import {EntityTypes} from "../../models/enums/EntityTypes";

@Component({
  selector: 'app-dish-edit',
  templateUrl: './dish-edit.component.html',
  styleUrls: ['./dish-edit.component.css']
})
export class DishEditComponent implements OnInit {
  dish!: DishExtended;
  categories: Category[] = [];
  ingredients: Ingredient[] = [];
  entityType: EntityTypes = EntityTypes.DISH;
  currCategory!: Category;
  options!: FormGroup;
  id = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  category = new FormControl(null, Validators.required);
  weight = new FormControl('', Validators.required);
  calories = new FormControl('', Validators.required);
  price = new FormControl('', Validators.required);
  discount = new FormControl('', Validators.required);
  ingredientsControl = new FormControl([], Validators.required);


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dishService: DishService,
    private categoryService: CategoryService,
    private ingredientsService: IngredientService,
  ) {
  }


  ngOnInit(): void {
    this.getAllCategories();
    this.getAllIngredients();
    this.getDish();
    this.options = this.fb.group({
      id: this.id,
      name: this.name,
      category: this.category,
      weight: this.weight,
      calories: this.calories,
      price: this.price,
      discount: this.discount,
      ingredients: this.ingredientsControl,
    });
  }


  public getDish(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.dishService.getDish(id).subscribe(
      (dish) => {
        this.dish = dish;
        this.currCategory = dish.category;
        this.setValues()
      }
    );
  }

  private setValues(): void {
    this.options.setValue({
      "id": this.dish.id,
      "name": this.dish.name,
      "category": this.dish.category,
      "weight": this.dish.weight,
      "calories": this.dish.calories,
      "price": this.dish.price,
      "discount": this.dish.discount,
      "ingredients": this.dish.ingredients,
    });
  }

  getValue(): void {
    this.dishService.updateDish(this.options.value)
      .subscribe();
  }

  private getAllCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      (categories) => {
        // TODO add method to utils
        this.categories = ToolbarComponent.toUpperCase(categories);
      });
  }

  private getAllIngredients(): void {
    this.ingredientsService.getAllIngredients().subscribe(
      (ingredients) => {
        this.ingredients = ingredients;
      });
  }

  compareObjects(object1: any, object2: any) {
    return object1 && object2 && object1.id === object2.id;
  }

}
