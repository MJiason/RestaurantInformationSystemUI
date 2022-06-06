import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DishExtended} from "../../models/dish-extended";
import {DishService} from "../../services/dish.service";
import {AuthService} from "../../services/auth-service";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  public dish!: DishExtended;

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService,
    public authService:AuthService,
  ) {
  }

  ngOnInit(): void {
    this.getDish();
  }

  public getDish(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.dishService.getDish(id).subscribe(
      (dish) => this.dish = dish
    );
  }
}
