import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {OrderStatus} from "../models/enums/OrderStatus";
import {Observable} from "rxjs";
import {Order} from "../models/order";
import {OrderStatuses} from "../models/orderStatuses";

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

  public getAllOrdersByStatus(orderStatus: OrderStatuses): null {
        return null;
  }
}
