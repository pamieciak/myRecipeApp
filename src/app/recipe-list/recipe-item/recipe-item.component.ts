import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interface/recipe-interface';
import { RecipeApiService } from 'src/app/services/recipe-api.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

    // deklaracja pola do przypisania zmiennych z bazy danych
    @Input() public recipe!: Recipe;

    constructor() {}

    ngOnInit() {

    }
}
