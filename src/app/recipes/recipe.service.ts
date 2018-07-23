import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 1)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
