import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Ingredient } from'../models/ingredient'

@Injectable({
  providedIn: 'root'
})

export class BurgerStoreService {

  constructor() { }

  private readonly _ingredients = new BehaviorSubject<Ingredient[]>([])

  get ingredients(): Ingredient[] {
    return this._ingredients.getValue()
  }

  set ingredients(val: Ingredient[]) {
    this._ingredients.next(val)
  }

  addBurgerPart(burgerPart: Ingredient) {
    this.ingredients = [
      ...this.ingredients,
      burgerPart
    ]
  }

  removeBurgerPart(id: number) {
    this.ingredients = this.ingredients.filter(bp => bp.runningId !== id)
  }

  removeBurger() {
    this.ingredients = []
  }
}