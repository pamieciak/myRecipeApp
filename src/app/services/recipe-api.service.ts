import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../interface/recipe-interface';

@Injectable({
  providedIn: 'root',
})
export class RecipeApiService {

  constructor(private http: HttpClient) {}

  public getRecipes() {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }
}
