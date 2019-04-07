import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.page.html',
    styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
    recipes: Recipe[] = [
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

    ngOnInit() {}
}
