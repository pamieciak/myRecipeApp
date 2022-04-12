import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../interface/recipe-interface';

@Injectable({
  providedIn: 'root',
})
export class RecipeApiService {


public refresh$ = new Subject<Recipe>();


  constructor(private http: HttpClient) {}

  public getRecipes() {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');

  }
  public addRecipe(recip: Recipe){
    return this.http.post<Recipe>('http://localhost:3000/recipes', recip )
  }
}
