import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe('test recipe', 'this is a test recipe', 'https://images.media-allrecipes.com/images/56589.png'),
    new Recipe('other test recipe', 'this is a test recipe', 'https://images.media-allrecipes.com/images/56589.png'),
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
