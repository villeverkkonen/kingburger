import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from'./ingredients-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  constructor() { }

  private readonly _money = new BehaviorSubject<number>(10)
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
    this.ingredients = this.ingredients.concat(ingredient)
  }

  removeIngredient(id: number) {
  }
}
