import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  startEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('apples', 56),
    new Ingredient('tomatoes', 6)
  ];
  constructor() { }

  getIngredients() {
    return this.ingredients;
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(object: Ingredient) {
    this.ingredients.push(object);
  }

  addRecipeIngredients(ingArray: Ingredient[]) {
    this.ingredients.push.apply(this.ingredients, ingArray);
  }

  updateIngredient(index: number, newIngridient: Ingredient) {
    this.ingredients[index] = newIngridient;
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }
}
