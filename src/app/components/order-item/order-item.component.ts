import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../models/order";
import {OrderStatus} from "../../models/enums/OrderStatus";
import {OrderStyles} from "../../models/enums/OrderStyles";
import {OrderService} from "../../services/order-service";

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input() order!: Order;
  @Input() style!: String;
  buttonName!: string;

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.calculateButtonName(this.order.orderStatus)
  }


  public getStyle(status: OrderStatus): string {
    switch (status) {
      case OrderStatus.ENTERING:
        return OrderStyles.ENTERING;
      case OrderStatus.NEW:
        return OrderStyles.NEW;
      case OrderStatus.READY:
        return OrderStyles.READY;
      case OrderStatus.DELIVERED:
        return OrderStyles.DELIVERED;
      default:
        return "No style";
    }
  }

  public changeStatus(): void {

    this.orderService.setOrderStatus(this.getNextStatus(), this.order.id)
      .subscribe()
    this.order.orderStatus = this.getNextStatus()
  }

  private calculateButtonName(orderStatus: OrderStatus): void {
    switch (orderStatus) {
      case OrderStatus.ENTERING:
        this.buttonName = "TO READY";
        break;
      case OrderStatus.NEW:
        this.buttonName = "TO PROCCESING";
        break;
      case OrderStatus.READY:
        this.buttonName = "TO DELIVERED";
        break;
    }
  }

  private getNextStatus(): OrderStatus {
    switch (this.order.orderStatus) {
      case OrderStatus.NEW:
        return OrderStatus.ENTERING;
      case OrderStatus.ENTERING:
        return OrderStatus.READY;
      case OrderStatus.READY:
        return  OrderStatus.DELIVERED;
      default:
        return OrderStatus.UNDEFINED;
    }
  }

}
