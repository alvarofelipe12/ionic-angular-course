import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.page.html',
    styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

    /**
     * Store a copy of all recipes
     */
    public recipes: Recipe[];

    constructor(
        private recipesService: RecipesService
    ) {}

    ngOnInit() {
        this.recipes = this.recipesService.getAllRecipes();
    }
}
