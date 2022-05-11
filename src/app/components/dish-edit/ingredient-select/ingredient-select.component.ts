import {Component, ElementRef, Injectable, Input, OnInit, ViewChild} from '@angular/core';
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {BehaviorSubject, map, Observable, startWith} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {IngredientService} from "../../../services/ingredient.service";
import {Ingredient} from "../../../models/Ingradient";
import {DishExtended} from "../../../models/dish-extended";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-ingredient-select',
  templateUrl: './ingredient-select.component.html',
  styleUrls: ['./ingredient-select.component.css']
})
export class IngredientSelectComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  inputControl = new FormControl();
  filteredIngredients!: Observable<Ingredient[]>;
  ingredientsArr: Ingredient[] = [];
  allIngredientsArr: Ingredient[] = [];

  @ViewChild('ingredientInput') ingredientInput!: ElementRef<HTMLInputElement>;

  @Input() options!: FormGroup;
  @Input() ingredients!: FormControl;
  private _dish = new BehaviorSubject<DishExtended>(new DishExtended());
  @Input() set dish(dish: DishExtended) {
    this._dish.next(dish);
  }

  get dish() {
    return this._dish.getValue();
  }

  ngOnInit(): void {
    this.getAllIngredients();
    this._dish.subscribe(x => {
      this.ingredientsArr = x.ingredients;
      this.ingredients.setValue(x.ingredients);
    });
  }

  private setAllIngredients(): void {
    this.filteredIngredients = this.inputControl.valueChanges.pipe(
      startWith(null),
      map((ingredient: string | Ingredient | null) => (
        ingredient ? this._filter(IngredientSelectComponent.convertIngredientToString(ingredient)) : this.allIngredientsArr.slice())),
    );
  }

  private getAllIngredients(): void {
    this.ingredientsService.getAllIngredients().subscribe(
      (ingredients) => {
        this.allIngredientsArr = ingredients;
        this.setAllIngredients();
      });
  }


  constructor(private ingredientsService: IngredientService) {
  }

  private static convertIngredientToString(ingredient: string | Ingredient | null): string {
    if (!ingredient) {
      return "";
    }
    if (typeof ingredient == "string") {
      return <string>ingredient;
    }
    return ((<Ingredient>ingredient).name);
  }

  remove(ingredient: Ingredient): void {
    const index = this.ingredientsArr.indexOf(ingredient);

    if (index >= 0) {
      this.ingredientsArr.splice(index, 1);
      this.ingredients.setValue(this.ingredientsArr);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.ingredientsArr.push(event.option.value);
    this.ingredients.setValue(this.ingredientsArr);
    this.ingredientInput.nativeElement.value = '';
    this.inputControl.setValue(null);
  }

  private _filter(value: string): Ingredient[] {
    const filterValue = value.toLowerCase();

    return this.allIngredientsArr.filter(ingredient => ingredient.name.toLowerCase().includes(filterValue));
  }
}
