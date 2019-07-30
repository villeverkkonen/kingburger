import { Component, OnInit } from '@angular/core'
import { IngredientService } from '../services/ingredient.service'
import { UserStoreService } from '../stores/user-store.service'
import { Ingredient } from '../models/ingredient'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  ingredients: Object = []

  constructor(
    private ingredientService: IngredientService,
    public userStore: UserStoreService
  ) { }

  ngOnInit() {
    this.ingredientService.getIngredients()
      .subscribe(ingredients => {
        this.ingredients = ingredients
      })
  }

  buyIngredient(ingredient: Ingredient) {
    this.userStore.addIngredient(ingredient)
    this.userStore.removeMoney(ingredient.price)
  }

}
