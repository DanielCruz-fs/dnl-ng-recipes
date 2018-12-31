import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-modal',
  templateUrl: './recipe-modal.component.html',
  styleUrls: ['./recipe-modal.component.css']
})
export class RecipeModalComponent implements OnInit {
  constructor(private recipeService: RecipeServiceService) { }
  editMode: boolean = false;
  recipeIndex: number;
  recipeForm: FormGroup;

  ngOnInit() {
    this.initForm();
    this.recipeService.onEditRecipe.subscribe((index: number) => {
      console.log(index)
      this.recipeIndex = index;
      this.editMode = true;
      this.initForm();
    });
    this.recipeService.editStatus.subscribe((data: boolean) => {
      this.editMode = data;
      this.recipeIndex = null;
      this.recipeForm.reset();
    });
  }
  
  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';

    if (this.editMode) {
      const currentRecipe = this.recipeService.getRecipe(this.recipeIndex);
      recipeName = currentRecipe.name;
      recipeImagePath = currentRecipe.imagePath;
      recipeDescription = currentRecipe.description;
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImagePath),
      description: new FormControl(recipeDescription),
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }
}
