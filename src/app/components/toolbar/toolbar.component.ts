import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";
import {Router} from "@angular/router";
import {routerUrl} from "../../../environments/router-manger";
import {MatDialog} from "@angular/material/dialog";
import {CardComponent} from "./card/card.component";
import {CardService} from "../../services/card.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public categories: Category[] = [];


  constructor(
    public cardService: CardService,
    private categoryService: CategoryService,
    private router: Router,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  openDialog() {
    const dialogRef = this.dialog.open(CardComponent);
    dialogRef.updatePosition({top: '65px', right: '70px'});
  }

  private getAllCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      (categories) => {
        this.categories = ToolbarComponent.toUpperCase(categories);
      });
  }

  public handleButton(category: string): void {
    this.router.navigate([routerUrl.menu],
      {queryParams: {category: category}})
      .then();
  }

  public static toUpperCase(categories: Category[]): Category[] {
    if (!categories) {
      return [];
    }
    let categoriesUpper: Category[] = [];
    categories.forEach((category) => categoriesUpper
      .push(new Category(category.id, this.capitalizeFirstLetter(category.name))));
    return categoriesUpper;
  }

  private static capitalizeFirstLetter(word: string): string {
    if (!word) return word;
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
}
