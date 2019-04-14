import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
    providedIn: 'root',
})
export class RecipesService {
    private recipes: Recipe[] = [
        {
            id: 'r1',
            title: 'Schnitzel',
            imageURL:
                'https://upload.wikimedia.org/wikipedia/commons/4/40/Wiener_Schnitzel.jpg',
            ingredients: ['French Fries', 'Pork Meat', 'Salad'],
        },
        {
            id: 'r2',
            title: 'Spaghetti',
            imageURL:
                'https://cdn.pixabay.com/photo/2011/04/29/11/20/spaghetti-7113_1280.jpg',
            ingredients: ['Spaghetties', 'Meat', 'Tomatoes'],
        },
    ];

    constructor() {}

    /**
     * Obtain all the recipes
     */
    public getAllRecipes() {
      // pull all thearray elements into a new array
      return [...this.recipes];
    }

    /**
     * Obtain one recipe
     * @param recipeId id of the recipe
     */
    public getRecipe(recipeId: string) {
      // pull all the properties of recipes object and copy them into a new object
      return {...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })};
    }

    public deleteRecipe(recipeId: string) {
      this.recipes = this.recipes.filter(recipe => {
        return recipe.id !== recipeId;
      });
    }
}
