import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'your Recipe Box';
  recipes: Recipe[] =[
    new Recipe(["chicken"], ["Bake at 400 degrees for 20 minutes."], "Baked Chicken"),
    new Recipe(["3 tablespoons olive oil", "1 small onion, chopped", "2 cloves garlic, minced", "3 tablespoons curry powder", "1 teaspoon ground cinnamon", "1 teaspoon paprika1 bay leaf", "1/2 teaspoon grated fresh ginger root", "1/2 teaspoon white sugarsalt to taste", "2 skinless, boneless chicken breast halves - cut into bite-size pieces", "1 tablespoon tomato paste1 cup plain yogurt3/4 cup coconut milk", "1/2 lemon, juiced", "1/2 teaspoon cayenne pepper"], ["Heat olive oil in a skillet over medium heat. ","Saute onion until lightly browned. ","Stir in garlic, curry powder, cinnamon, paprika, bay leaf, ginger, sugar and salt. ","Continue stirring for 2 minutes. ","Add chicken pieces, tomato paste, yogurt, and coconut milk. ","Bring to a boil, reduce heat, and simmer for 20 to 25 minutes.","Remove bay leaf, and stir in lemon juice and cayenne pepper. Simmer 5 more minutes."], "Curry Chicken")
  ];
}
