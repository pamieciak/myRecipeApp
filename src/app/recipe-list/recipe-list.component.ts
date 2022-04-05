
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../interface/recipe-interface';
import { RecipeApiService } from '../services/recipe-api.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  // deklaracja pola do przypisania zmiennych z bazy danych
  public recipes: Recipe[] = [];

  constructor(private recipeApi: RecipeApiService){
  }

  ngOnInit() {
    this.recipeApi.getRecipes().subscribe((result) => {
      this.recipes = result;
    })
  }

}
