import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../interface/recipe-interface';
import { RecipeApiService } from '../services/recipe-api.service';
import { ShowdetailService } from '../services/showdetail.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
 @Input() recipe?: Recipe;


  isopen = false;



  constructor(
    private recipeApi: RecipeApiService,
    private showDetail: ShowdetailService
  ) {}

  ngOnInit(): void {
    this.recipeApi.getRecipes().subscribe((result) => {
      this.recipe = result[0];


      })

    this.showDetail.senddetails$.subscribe((show) => {
      this.recipe = show;
    });
  }

  openAdd() {
    this.isopen = !this.isopen;
  }
}
