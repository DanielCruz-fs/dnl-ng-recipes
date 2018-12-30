import { Injectable } from '@angular/core';
import { Ingridient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  startEditing = new Subject<number>();
  private ingridients: Ingridient[] = [
    new Ingridient('apples', 56),
    new Ingridient('tomatoes', 6)
  ];
  constructor() { }

  getIngridients() {
    return this.ingridients;
  }

  getIngridient(index: number) {
    return this.ingridients[index];
  }

  addIngridient(object: Ingridient) {
    this.ingridients.push(object);
  }

  addRecipeIngridients(ingArray: Ingridient[]) {
    this.ingridients.push.apply(this.ingridients, ingArray);
  }

  updateIngridient(index: number, newIngridient: Ingridient) {
    this.ingridients[index] = newIngridient;
  }

  deleteIngridient(index: number) {
    this.ingridients.splice(index, 1);
  }
}
