import { Component, OnInit } from '@angular/core';
import {categories, Category} from "../../models/category";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  public categories: Category[] = categories;

  constructor() { }

  ngOnInit(): void {
  }

}
