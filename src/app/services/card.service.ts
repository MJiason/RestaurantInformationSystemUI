import {Injectable, OnInit} from '@angular/core';
import {Dish} from "../models/dish";
import {DishExtended} from "../models/dish-extended";
import {Card, CardItem} from "../models/card";

@Injectable({
  providedIn: 'root'
})
export class CardService implements OnInit {
  private cardKey = "card";
  public dishesCount: number = 0;

  constructor() {
    this.getDishesCount();
  }

  ngOnInit(): void {
    console.log("service init");
    this.getDishesCount();
  }

  public addToCard(dish: Dish | DishExtended): void {
    const count = 1;
    let card: Card;
    if (!localStorage.getItem(this.cardKey)) {
      card = new Card();
    } else {
      card = <Card>JSON.parse(localStorage.getItem(this.cardKey) || "");
    }
    const cardItem = new CardItem(dish, count);
    if (this.ifDishAlreadyInCard(card.dishes, dish.id)) {
      card.dishes[this.getIndex(card, dish.id)].count++;
    } else {
      card.dishes.push(cardItem);
    }
    localStorage.setItem(this.cardKey, JSON.stringify(card));
    this.getDishesCount();
  }

  public removeFromCard(dishId: number): void {
    if (!localStorage.getItem(this.cardKey)) {
      return;
    }
    let card = <Card>JSON.parse(localStorage.getItem(this.cardKey) || "");
    card.dishes = card.dishes.filter((item) => item.dish.id !== dishId);
    localStorage.setItem(this.cardKey, JSON.stringify(card));
    this.getDishesCount();
  }

  public incDishCount(dishId: number): void {
    if (!localStorage.getItem(this.cardKey)) {
      return;
    }
    let card = <Card>JSON.parse(localStorage.getItem(this.cardKey) || "");
    if (!this.ifDishAlreadyInCard(card.dishes, dishId)) {
      return;
    }
    card.dishes[this.getIndex(card, dishId)].count++;
    localStorage.setItem(this.cardKey, JSON.stringify(card));
    this.getDishesCount();
  }

  public decDishCount(dishId: number): void {
    if (!localStorage.getItem(this.cardKey)) {
      return;
    }
    let card = <Card>JSON.parse(localStorage.getItem(this.cardKey) || "");
    if (!this.ifDishAlreadyInCard(card.dishes, dishId)) {
      return;
    }
    if (card.dishes[this.getIndex(card, dishId)].count === 1) {
      this.removeFromCard(dishId);
      return;
    } else {
      card.dishes[this.getIndex(card, dishId)].count--;
    }
    localStorage.setItem(this.cardKey, JSON.stringify(card));
    this.getDishesCount();
  }


  public getCard(): Card {
    if (!localStorage.getItem(this.cardKey)) {
      return new Card();
    }
    return <Card>JSON.parse(localStorage.getItem(this.cardKey) || "");
  }


  private ifDishAlreadyInCard(cardItems: CardItem[], dishId: number): boolean {
    let isInCard = false;
    cardItems.forEach((item) => {
      if (item.dish.id === dishId) {
        isInCard = true;
        return;
      }
    });
    return isInCard;
  }

  private getIndex(card: Card, id: number): number {
    let index;
    index = card.dishes.findIndex((item) => item.dish.id === id)
    return index;
  }

  private getDishesCount(): void {
    if (!localStorage.getItem(this.cardKey)) {
      this.dishesCount = 0;
    }
    let count = 0;
    let card = <Card>JSON.parse(localStorage.getItem(this.cardKey) || "");
    card.dishes.forEach((item) => {
      count += item.count
    })
    this.dishesCount = count;
  }

}
