import { Recipe } from "./recipe.model";
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter <Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg'),
        new Recipe('A Second Test Recipe', 'This the second test', 'https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg')
    
      ];
    
      getRecipes() {
          return this.recipes.slice();
      }
      
}