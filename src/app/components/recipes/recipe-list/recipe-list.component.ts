import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pasta', 'this is the desc', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/1/RX-FNM_030111-Lighten-Up-012_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539856907.jpeg'),
    new Recipe('Tofu', 'this is the tofu', 'https://simpleveganblog-lne9w9dshg8v.stackpathdns.com/wp-content/uploads/2019/03/Easy-marinated-tofu-6.jpg')
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeDetail(recipeObject: Recipe) {
    this.recipeSelected.emit(recipeObject);
  }
}
