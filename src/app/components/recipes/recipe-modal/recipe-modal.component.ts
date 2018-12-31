import { Component, OnInit, Input } from '@angular/core';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-recipe-modal',
  templateUrl: './recipe-modal.component.html',
  styleUrls: ['./recipe-modal.component.css']
})
export class RecipeModalComponent implements OnInit {
  constructor(private recipeService: RecipeServiceService) { }
  editMode: boolean = false;
  recipeIndex: number;
  ngOnInit() {
    this.recipeService.onEditRecipe.subscribe((index: number) => {
      console.log(index)
      this.recipeIndex = index;
      this.editMode = true;
    });
    this.recipeService.editStatus.subscribe( (data: boolean) => {
      this.editMode = data;
      this.recipeIndex = null;
    });
  }
}
