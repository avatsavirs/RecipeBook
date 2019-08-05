import { EventEmitter } from '@angular/core';
import { Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeBookService{

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
  new Recipe('testRecipe', 'This is a test recipe', 'https://i.ytimg.com/vi/nIpmbn29oNA/hqdefault.jpg',[new Ingredient('Meat', 10), new Ingredient('Salt', 0.001)]),
  new Recipe('testRecipe2', 'This is another test recipe', 'https://www.vegrecipesofindia.com/wp-content/uploads/2013/10/rice-kheer-recipe-2-500x375.jpg',[new Ingredient('Milk', 1), new Ingredient('Sugar', 0.5)])
  ];

  getRecipe(){
    return this.recipes.slice(); //returns a copy of the array instead of the reference as the default behaviour is to send a reference in case of an array.
  }
}