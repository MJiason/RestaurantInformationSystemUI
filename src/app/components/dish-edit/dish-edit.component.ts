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

@Component({
  selector: 'app-dish-edit',
  templateUrl: './dish-edit.component.html',
  styleUrls: ['./dish-edit.component.css']
})
export class DishEditComponent implements OnInit {
  dish!: DishExtended;
  categories: Category[] = [];
  ingredients: Ingredient[] = [];
  options!: FormGroup;
  name = new FormControl('', Validators.required);
  category = new FormControl('', Validators.required);
  weight = new FormControl('', Validators.required);
  calories = new FormControl('', Validators.required);
  price = new FormControl('', Validators.required);
  discount = new FormControl('', Validators.required);
  ingredientsControl: FormControl = new FormControl([], Validators.required);


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
        this.setValues()
      }
    );
  }

  private setValues(): void {
    this.options.setValue({
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
    console.log(this.options.value);
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
    return object1.value && object2 && object1.value.id === object2.id;
  }

}
