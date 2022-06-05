import { Component, OnInit } from '@angular/core';
import {Order} from "../../../models/order";
import {OrderService} from "../../../services/order-service";
import {interval, startWith, Subscription, switchMap} from "rxjs";
import {OrderStatuses} from "../../../models/order-statuses";
import {OrderStatus} from "../../../models/enums/OrderStatus";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-waiter-orders',
  templateUrl: './waiter-orders.component.html',
  styleUrls: ['./waiter-orders.component.css']
})
export class WaiterOrdersComponent implements OnInit {
  orders: Order[] = [];
  timeInterval!: Subscription;
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initData();
  }

  private initData(): void {
    let orderStatuses = new OrderStatuses([OrderStatus.READY]);
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.timeInterval = interval(2000)
      .pipe(
        startWith(0),
        switchMap(() => this.orderService.getOrdersByTable(orderStatuses, id))
      ).subscribe(
        (orders) => {
          this.orders = orders;
        }
      );
  }

}
