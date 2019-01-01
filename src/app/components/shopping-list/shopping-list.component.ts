import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
  }

  onEditItem(index: number) {
    this.shoppinglistService.startEditing.next(index);
  }

}
