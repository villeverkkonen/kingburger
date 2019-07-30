import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Ingredient } from'../models/ingredient'

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  constructor() { }

  private readonly _money = new BehaviorSubject<number>(0)
  private readonly _ingredients = new BehaviorSubject<Ingredient[]>([])

  get money(): number {
    return this._money.getValue()
  }

  set money(amount: number) {
    this._money.next(amount)
  }

  addMoney(amount: number) {
    this.money = this.money + amount
  }

  removeMoney(amount: number) {
    if (this.money - amount < 0) {
      this.money = 0
    } else {
      this.money = this.money - amount
    }
  }

  get ingredients(): Ingredient[] {
    return this._ingredients.getValue()
  }

  set ingredients(val: Ingredient[]) {
    this._ingredients.next(val)
  }

  addIngredient(ingredient: Ingredient) {
    let ingredientFound: boolean = false
    this.ingredients.map(ing => {
      if (ing.title === ingredient.title) {
        ing.quantity += 1
        ingredientFound = true
      }
    })
    if (!ingredientFound) {
      const newIngredient = {
        title: ingredient.title,
        imageUrl: ingredient.imageUrl,
        price: ingredient.price,
        id: ingredient.id,
        quantity: 1
      }
      this.ingredients = this.ingredients.concat(newIngredient)
    }
  }

  removeIngredient(id: number) {
    this.ingredients.map(ing => {
      if (ing.id === id) {
        ing.quantity -= 1
        if (ing.quantity < 0) {
          ing.quantity = 0
        }
      }
    })
  }
}
