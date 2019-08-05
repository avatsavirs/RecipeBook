import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeBookService } from './recipe-book.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeBookService]
})
export class RecipeBookComponent implements OnInit {

  constructor(private recipebookService: RecipeBookService) { }

  selectedRecipe: Recipe;

  ngOnInit() {
    this.recipebookService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
