import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class ShoppingListService{
    private ingredients: Ingredient[] = [{name: 'alloo', amount: 100}];

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    getIngredients(){
        return this.ingredients.slice();
    }

    onAddToList(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addRecipeIngredients(ingredients: Ingredient[]){
        /* ingredients.forEach(ingredient => {
            this.onAddToList(ingredient);
        }); */
        this.ingredients.push(...ingredients); // '...' is called the spread operator it divides the array into its individual elements
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}