import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
declare var $: any;

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
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const currentRecipe = this.recipeService.getRecipe(this.recipeIndex);
      recipeName = currentRecipe.name;
      recipeImagePath = currentRecipe.imagePath;
      recipeDescription = currentRecipe.description;
      if (currentRecipe['ingredients']) {
        for (const ing of currentRecipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            name: new FormControl(ing.name, Validators.required),
            amount: new FormControl(ing.amount, [
              Validators.required,
              Validators.pattern('^[1-9]+[0-9]*$')
            ])
          }));
        }  
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients
    });
    console.log(this.recipeForm);
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.recipeIndex, this.recipeForm.value);
      this.recipeService.newRecipeUpdatedEvent.next(this.recipeIndex);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    $('#recipeModal').modal('hide');
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIng() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[1-9]+[0-9]*$')
        ])
      })
    );
  }
}
