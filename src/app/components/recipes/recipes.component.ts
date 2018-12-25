import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  modalTitle: string;
  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe( (data: Recipe) => {
    //   this.recipe = data;
    // });
    this.recipeService.onEditRecipe.subscribe( (data: string) => {
      this.modalTitle = data;
    });
  }

}
