import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../../../models/dish";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item!: Dish;
  constructor() { }

  ngOnInit(): void {
  }

}
