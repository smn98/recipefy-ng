import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('test recipe', 'this is a test recipe', 'https://images.media-allrecipes.com/images/56589.png'),
    new Recipe('other test recipe', 'this is a test recipe', 'https://images.media-allrecipes.com/images/56589.png'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
