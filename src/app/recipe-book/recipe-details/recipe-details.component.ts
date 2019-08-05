import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipeSelected: Recipe;

  constructor(private shoppinglistService: ShoppingListService) { }

  onAddRecipeIngredients(){
    this.shoppinglistService.addRecipeIngredients(this.recipeSelected.ingredients)
  }

  ngOnInit() {
  }

}
