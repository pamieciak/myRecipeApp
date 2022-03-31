import { Component, OnInit } from '@angular/core';


interface Recipe {
  name: string;
  id: number;
  descriprion: string[];
  rating: number;
  ingredients: Ingredient[]
}

interface Ingredient{
  name: string;
  value: string;
}



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  // deklaracja pola do przypisania zmiennych z bazy danych
  public recipes: Recipe[] = [];

  constructor(){
    fetch('http://localhost:3000/recipes')
    .then(res => res.json())
    .then((recipes: Recipe[]) => {
      this.recipes = recipes;
    })
  }

  ngOnInit(): void {
  }

}
