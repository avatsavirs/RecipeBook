import { EventEmitter } from '@angular/core';
import { Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeBookService{

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
  new Recipe('testRecipe', 'This is a test recipe', 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',[new Ingredient('Meat', 10), new Ingredient('Salt', 0.001)]),
  new Recipe('testRecipe2', 'This is another test recipe', 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',[new Ingredient('Milk', 1), new Ingredient('Sugar', 0.5)])
  ];

  getRecipes(){
    return this.recipes.slice(); //returns a copy of the array instead of the reference as the default behaviour is to send a reference in case of an array.
  }
  getRecipe(id: number){
    return this.recipes[id];
  }
}