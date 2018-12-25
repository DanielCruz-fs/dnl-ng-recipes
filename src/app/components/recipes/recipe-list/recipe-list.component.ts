import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
declare var $: any;

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() onCreateRecipe = new EventEmitter<string>();
  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  createRecipeModal() {
    $('#recipeModal').modal('show')
    this.onCreateRecipe.emit('New Recipe!');
  }
}
