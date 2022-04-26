import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DishService} from "../../services/dish.service";
import {Dish} from "../../models/dish";

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = [];
  category: string = this.getQueryParam();

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService,
  ) {
  }

  handleQueryParam(): void {
    this.route.queryParamMap
      .subscribe((i) => {
        this.category = i.get("category") || "garnir"
        this.getDishes();
      })
  }

  ngOnInit(): void {
    this.handleQueryParam();
    this.getDishes();
  }

  private getDishes(): void {
    this.dishService.getAllDishes(this.category.toLowerCase()).subscribe(
      (dishes: Dish[]) => {
        this.dishes = dishes;
      });
  }

  private getQueryParam(): string {
    return this.route.snapshot.queryParamMap.get("category") || "garnir";
  }
}
