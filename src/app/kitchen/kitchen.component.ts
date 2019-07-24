import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../ingredient.service'

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {

  ingredients: Object = []
  burgerParts: any = []
  runningId: number = 1

  constructor( private ingredientService: IngredientService ) { }

  ngOnInit() {
    this.ingredientService.getIngredients()
      .subscribe(ingredients => {
        this.ingredients = ingredients
      })
  }

  addIngredient(ing: Object) {
    let ingredient = Object.assign({}, ing)
    ingredient['runningId'] = this.runningId
    this.burgerParts.push(ingredient)
    this.runningId += 1
  }

  removeIngredient(id: number) {
    this.burgerParts = this.burgerParts.filter(burgerPart => burgerPart['runningId'] !== id)
  }
}
