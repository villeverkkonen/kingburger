import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BurgerStoreService } from '../burger-store.service';
import { Ingredient } from'../ingredients-store.service';
import { UserStoreService } from '../user-store.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {

  runningId: number = 1

  constructor(
    public burgerStore: BurgerStoreService,
    public userStore: UserStoreService
  ) { }

  ngOnInit() {}

  addIngredient(ing: Ingredient) {
    let ingredient: Ingredient = Object.assign({}, ing)
    ingredient['runningId'] = this.runningId
    this.burgerStore.addBurgerPart(ingredient)
    this.runningId += 1
    this.userStore.removeIngredient(this.runningId)
  }

  removeIngredient(id: number) {
    this.burgerStore.removeBurgerPart(id)
  }

  drop(event: CdkDragDrop<Object[]>) {
    moveItemInArray(this.burgerStore.ingredients, event.previousIndex, event.currentIndex)
  }
}
