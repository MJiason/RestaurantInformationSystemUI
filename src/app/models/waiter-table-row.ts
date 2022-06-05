import {Order} from "./order";
import {OrderStatus} from "./enums/OrderStatus";

export class WaiterTableRow {
  public id!: number;
  private NEW!: number;
  private ENTERING!: number;
  private READY!: number;
  private DELIVERED!: number;
  private sum!: number;


  constructor() {
  }


  setId(value: number) {
    this.id = value;
  }

  setNew(orders: Order[]) {
    this.NEW = this.countOrders(orders, OrderStatus.NEW);
  }

  setEntering(orders: Order[]) {
    this.ENTERING = this.countOrders(orders, OrderStatus.ENTERING);
  }

  setReady(orders: Order[]) {
    this.READY = this.countOrders(orders, OrderStatus.READY);
  }

  setDelivered(orders: Order[]) {
    this.DELIVERED = this.countOrders(orders, OrderStatus.DELIVERED);
  }

  setSum (orders: Order[]) {
    let sum = 0;
    for (let order of orders) {
      for (let dish of order.dishes) {
        sum += dish.dish.price * dish.count;
      }
    }
    this.sum = sum;
  }

  private countOrders(orders: Order[], status: OrderStatus): number {
    let count = 0;
    orders.forEach(order => {
      if (order.orderStatus === status)
        count++;
    });
    return count;
  }
}
