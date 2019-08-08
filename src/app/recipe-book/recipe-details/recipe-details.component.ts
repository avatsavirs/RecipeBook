import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeBookService } from '../recipe-book.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipeSelected: Recipe;
  id: number;

  constructor(private shoppinglistService: ShoppingListService, private recipebookService: RecipeBookService ,private router: Router ,private route: ActivatedRoute) { }

  onAddRecipeIngredients(){
    this.shoppinglistService.addRecipeIngredients(this.recipeSelected.ingredients)
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) =>{
        this.id = +params['id'];
        this.recipeSelected = this.recipebookService.getRecipe(this.id);
      }
    );
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    console.log('test');
  }

}
