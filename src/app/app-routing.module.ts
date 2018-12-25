import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { UnknownRecipeComponent } from './components/recipes/unknown-recipe/unknown-recipe.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: UnknownRecipeComponent },
    { path: ':id', component: RecipeDetailComponent }

  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'recipes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
