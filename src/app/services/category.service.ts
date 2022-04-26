import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/category";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private getAllCategoriesUrl = `${environment.url}/category`

  constructor(private http: HttpClient) { }

  public getAllCategories():Observable<Category[]> {
    return  this.http.get<Category[]>(this.getAllCategoriesUrl);
  }
}
