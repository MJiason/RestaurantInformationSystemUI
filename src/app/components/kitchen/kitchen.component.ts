import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Order} from "../../models/order";
import {OrderService} from "../../services/order-service";
import {OrderStatus} from "../../models/enums/OrderStatus";
import {Dish} from "../../models/dish";

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit, AfterViewInit {
  orders: Order[] = [];


  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.orderService.getAllOrders(OrderStatus.NEW)
      .subscribe(
      (orders) => {
        this.orders = orders;
      }
    );
  }

  ngAfterViewInit(): void {

  }

}
