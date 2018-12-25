import { Ingridient } from './../models/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  // recipeSelected = new EventEmitter<Recipe>();
  onEditRecipe = new EventEmitter<String>();
  private recipes: Recipe[] = [
    new Recipe('Pasta', 'Full vegan persto-pasta',
               'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/1/RX-FNM_030111-Lighten-Up-012_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539856907.jpeg',
               [new Ingridient('Noodles', 34), new Ingridient('Pesto', 8)]
               ),
    new Recipe('Tofu', 'Whole vegan fried tofu',
               'https://simpleveganblog-lne9w9dshg8v.stackpathdns.com/wp-content/uploads/2019/03/Easy-marinated-tofu-6.jpg',
               [ new Ingridient('Garlic', 1), new Ingridient('Tofu', 2)]
               )
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
}
