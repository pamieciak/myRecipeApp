import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Recipe } from 'src/app/interface/recipe-interface';
import { RecipeApiService } from 'src/app/services/recipe-api.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
showStep:string[] = [];

  form = this.fb.group({
    name: new FormControl(''),
    description: new FormArray([new FormControl('')]),
    rating: new FormControl(''),
  });

  public get descFormArray() {
    return this.form.get('description') as FormArray;
  }

  constructor(private recipeApi: RecipeApiService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  addStep() {
    const control = new FormControl('')
    this.descFormArray.push(control);
    this.showStep.push(this.descFormArray.value)
    console.log(this.descFormArray);

  }
  addRecipe() {
    const value = this.form.value as Recipe;

 this.recipeApi.addRecipe(value).subscribe((post)=>{
   this.recipeApi.refresh$.next(post)
 })
  }
}
