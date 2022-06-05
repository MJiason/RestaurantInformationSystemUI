import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {OrderStatus} from "../models/enums/OrderStatus";
import {Observable} from "rxjs";
import {Order} from "../models/order";
import {OrderStatuses} from "../models/order-statuses";
import {OrderStatusUpdate} from "../models/order-status-update";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderUrl = `${environment.url}/order`;

  constructor(private http: HttpClient) {
  }

  public getAllOrders(orderStatus: OrderStatus): Observable<Order[]> {
    let params = new HttpParams()
      .append("status", orderStatus);
    return this.http.get<Order[]>(this.orderUrl, {'params': params});
  }

  public getAllOrdersByStatus(orderStatus: OrderStatuses): Observable<Order[]> {
    return this.http.post<Order[]>(this.orderUrl + "s", orderStatus);
  }

  public setOrderStatus(orderStatus: OrderStatus, id: number): Observable<OrderStatusUpdate> {
    let orderStatusUpdate = new OrderStatusUpdate();
    orderStatusUpdate.orderStatus = orderStatus;
    orderStatusUpdate.id = id;
    return this.http.post<OrderStatusUpdate>(this.orderUrl + "-status", orderStatusUpdate);
  }

  public getOrdersByTable(orderStatus: OrderStatuses, id: number): Observable<Order[]> {
    return this.http.post<Order[]>(`${this.orderUrl}/table/${id}` , orderStatus);
  }

  public closeOrders( id: number) {
    let params = new HttpParams()
      .append("tableNum", id);
    return this.http.get(`${this.orderUrl}/close`, {'params': params});
  }
}
