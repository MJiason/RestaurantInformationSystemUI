import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Dish} from "../models/dish";
import {DishExtended} from "../models/dish-extended";

@Injectable({
  providedIn: 'root'
})
export class DishService {
  private dishUrl = `${environment.url}/dish`

  constructor(private http: HttpClient) { }

  public getAllDishes(category: string): Observable<Dish[]> {
    let params = new HttpParams()
      .append("category", category);
    return this.http.get<Dish[]>(this.dishUrl, {params: params});
  }

  public getDish(id: number): Observable<DishExtended> {
      return this.http.get<DishExtended>(`${this.dishUrl}/${id}`);
  }
}
