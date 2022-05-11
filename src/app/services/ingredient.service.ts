import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/category";
import {Ingredient} from "../models/Ingradient";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private getAllIngredientsUrl = `${environment.url}/ingredient`

  constructor(private http: HttpClient) { }

  public getAllIngredients():Observable<Ingredient[]> {
    return  this.http.get<Ingredient[]>(this.getAllIngredientsUrl);
  }
}
