import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrderStatuses} from "../../models/order-statuses";
import {OrderStatus} from "../../models/enums/OrderStatus";
import {interval, startWith, Subscription, switchMap} from "rxjs";
import {Order} from "../../models/order";
import {OrderService} from "../../services/order-service";
import {WaiterTableRow} from "../../models/waiter-table-row";

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit, OnDestroy {
  orders!: Order[];
  idsSet: Set<number> = new Set;
  timeInterval!: Subscription;
  waiterTableData: WaiterTableRow[] = [];
  displayedColumns: string[] = ['id', 'NEW', "ENTERING", "READY", "DELIVERED", "SUM", "actions"];
  dataSource: WaiterTableRow[] = [];

  constructor(private orderService: OrderService) {
  }

  ngOnDestroy(): void {
    this.timeInterval.unsubscribe();
  }

  ngOnInit(): void {
    this.getInitData()
  }

  private getInitData(): void {
    let orderStatuses = new OrderStatuses([
      OrderStatus.NEW,
      OrderStatus.READY,
      OrderStatus.ENTERING,
      OrderStatus.DELIVERED
    ]);
    this.timeInterval = interval(1000)
      .pipe(
        startWith(0),
        switchMap(() => this.orderService.getAllOrdersByStatus(orderStatuses))
      ).subscribe(
        (orders) => {
          this.orders = orders;
          this.setIds(this.orders);
          this.getTableData();
          this.waiterTableData.sort((a, b) => a.id - b.id);

          this.dataSource = this.waiterTableData;
        }
      );
  }

  private setIds(orders: Order[]) {
    orders.forEach(order => this.idsSet.add(order.tableNum));
  }

  private getTableData(): void {
    this.waiterTableData = [];
    for (let number of this.idsSet) {
      let tableRow = new WaiterTableRow();
      tableRow.setId(number);
      tableRow.setNew(this.orders.filter(order => order.tableNum === number));
      tableRow.setEntering(this.orders.filter(order => order.tableNum === number));
      tableRow.setReady(this.orders.filter(order => order.tableNum === number));
      tableRow.setDelivered(this.orders.filter(order => order.tableNum === number));
      tableRow.setSum(this.orders.filter(order => order.tableNum === number));
      if (this.orders.filter(order => order.tableNum === number).length !== 0) {
        this.waiterTableData.push(tableRow);
      }

    }
  }

  public closeOrder(id: number) {
    this.orderService.closeOrders(id)
      .subscribe();
  }

}
