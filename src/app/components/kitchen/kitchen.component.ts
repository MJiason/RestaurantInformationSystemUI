import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Order} from "../../models/order";
import {OrderService} from "../../services/order-service";
import {OrderStatus} from "../../models/enums/OrderStatus";
import {Dish} from "../../models/dish";
import {OrderStatuses} from "../../models/order-statuses";
import {interval, startWith, Subscription, switchMap} from "rxjs";

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit, AfterViewInit, OnDestroy{
  orders: Order[] = [];
  timeInterval!: Subscription;


  constructor(private orderService: OrderService) {
  }

  ngOnDestroy(): void {
        this.timeInterval.unsubscribe();
    }

  ngOnInit(): void {
    let orderStatuses = new OrderStatuses([OrderStatus.NEW, OrderStatus.ENTERING]);
    this.timeInterval = interval(2000)
      .pipe(
        startWith(0),
        switchMap(() => this.orderService.getAllOrdersByStatus(orderStatuses))
      ).subscribe(
        (orders) => {
          this.orders = orders;
          this.sortOrders(orders);
        }
      );
  }

  ngAfterViewInit(): void {
  }

  private sortOrders(orders: Order[]): void {
    this.orders.sort((order1, order2) => order2.orderStatus.localeCompare(order1.orderStatus))
  }
}
