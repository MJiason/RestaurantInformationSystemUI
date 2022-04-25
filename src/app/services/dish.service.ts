import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Dish} from "../models/dish";

@Injectable({
  providedIn: 'root'
})
export class DishService {
  private dishUrl = `${environment.url}/dish`

  constructor(private http: HttpClient) { }

  getAllDishes(category: string): Observable<Dish[]> {
    let params = new HttpParams()
      .append("category", category);
    return this.http.get<Dish[]>(this.dishUrl, {params: params});
  }
}
