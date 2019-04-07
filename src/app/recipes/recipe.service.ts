import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty meat schnitzel',
      'https://static.essen-und-trinken.de/bilder/7b/41/9150/galleryimage/420651527d7a78c4befed182dd4f500a.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big fat Burger',
      'Big juicy burger with extra cheese',
      'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg', [
        new Ingredient('Buns', 2),
        new Ingredient('Pattie', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipe(index: number){
    return this.recipes[index];
  }
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
