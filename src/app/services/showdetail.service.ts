import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../interface/recipe-interface';
import { RecipeApiService } from './recipe-api.service';

@Injectable({
  providedIn: 'root'
})
export class ShowdetailService {

public $senddetails = new Subject<Recipe>();

  constructor() { }



}
