import { Ingredient } from './../models/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  // recipeSelected = new EventEmitter<Recipe>();
  onEditRecipe = new EventEmitter<number>();
  editStatus = new EventEmitter<boolean>();
  newRecipeUpdatedEvent = new Subject<number>();
  private recipes: Recipe[] = [
    new Recipe('Pasta', 'Full vegan persto-pasta',
               'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/1/RX-FNM_030111-Lighten-Up-012_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539856907.jpeg',
               [new Ingredient('Noodles', 34), new Ingredient('Pesto', 8)]
               ),
    new Recipe('Tofu', 'Whole vegan fried tofu',
               'https://simpleveganblog-lne9w9dshg8v.stackpathdns.com/wp-content/uploads/2019/03/Easy-marinated-tofu-6.jpg',
               [ new Ingredient('Garlic', 1), new Ingredient('Tofu', 2)]
               )
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}
