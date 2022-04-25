import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DishService} from "../../services/dish.service";
import {Dish} from "../../models/dish";

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = [];

  constructor(
    private route: Router,
    private dishService: DishService
  ) {
  }

  ngOnInit(): void {
    this.getDishes();
  }

  private getDishes(): void {
    this.dishService.getAllDishes("garnir").subscribe(
      (dishes: Dish[]) => {
        this.dishes = dishes;
      });
  }

}
