import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
declare var $: any;

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeId: number;
  constructor(private shoppinglistService: ShoppingListService, private route: ActivatedRoute, 
              private recipeService: RecipeServiceService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.recipeId = +params.id;
      this.recipe = this.recipeService.getRecipe(this.recipeId);
    });
  }
  addIngridientsToSL() {
    this.shoppinglistService.addRecipeIngridients(this.recipe.ingrients);
    console.log(this.recipe.ingrients);
  }
  editRecipeModal() {
    $('#recipeModal').modal('show');
    this.recipeService.onEditRecipe.emit(this.recipeId);
  }
}
