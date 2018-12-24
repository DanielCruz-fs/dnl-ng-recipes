import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingridient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }
  addIngridientsToSL() {
    this.shoppinglistService.addRecipeIngridients(this.recipe.ingrients);
    console.log(this.recipe.ingrients);
  }

}
