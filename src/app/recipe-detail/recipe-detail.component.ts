import { Component, OnInit } from '@angular/core';
import { Recipe } from '../interface/recipe-interface';
import { RecipeApiService } from '../services/recipe-api.service';
import { ShowdetailService } from '../services/showdetail.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  public recipe!: Recipe;

  isopen = true;

  constructor(
    private recipeApi: RecipeApiService,
    private showDetail: ShowdetailService
  ) {}

  ngOnInit(): void {
    this.recipeApi.getRecipes().subscribe((result) => {
      this.recipe = result[0];
      console.log(this.recipe.ingriedients.name)
    });

    this.showDetail.$senddetails.subscribe((show) => {
      this.recipe = show;
    });
  }

  openAdd() {
    this.isopen = !this.isopen;
  }
}
