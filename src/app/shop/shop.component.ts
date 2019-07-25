import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../ingredient.service'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  ingredients: Object = []

  constructor( private ingredientService: IngredientService ) { }

  ngOnInit() {
    this.ingredientService.getIngredients()
      .subscribe(ingredients => {
        this.ingredients = ingredients
      })
  }

  buyIngredient() {
    console.log("BUY")
  }

}
