import { Component, OnInit } from '@angular/core'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'
import { BurgerStoreService } from '../stores/burger-store.service'
import { Ingredient } from'../models/ingredient'
import { UserStoreService } from '../stores/user-store.service'
import { BurgerService } from '../services/burger.service'
import { KitchenStoreService } from '../stores/kitchen-store.service';
import { Burger } from '../models/burger';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {

  data: Burger[] = []
  isLoadingResults: boolean = false
  burgerName: string = ''
  requiredError: boolean = false

  constructor(
    public burgerStore: BurgerStoreService,
    public userStore: UserStoreService,
    public kitchenStore: KitchenStoreService,
    private burgerService: BurgerService,
    private router: Router
  ) { }

  ngOnInit() { }

  addIngredient(ing: Ingredient) {
    let ingredient: Ingredient = Object.assign({}, ing)
    ingredient.runningId = this.kitchenStore.runningId
    this.kitchenStore.incrementId()
    this.burgerStore.addBurgerPart(ingredient)
    this.userStore.removeIngredient(ing.id)
  }

  removeIngredient(id: number) {
    this.burgerStore.removeBurgerPart(id)
    this.userStore.removeIngredient(id)
    
  }

  drop(event: CdkDragDrop<Object[]>) {
    moveItemInArray(this.burgerStore.ingredients, event.previousIndex, event.currentIndex)
  }

  updateName(event: any) {
    this.burgerName = event.target.value
  }

  saveBurger() {
    if (!this.burgerName || this.burgerStore.ingredients.length === 0) {
      this.displayRequiredError()
      return
    }
    this.isLoadingResults = true
    const burger = {
      name: this.burgerName,
      ingredients: this.burgerStore.ingredients,
      votes: 0
    }
    this.burgerService.addBurger(burger)
      .subscribe(res => {
        this.burgerStore.removeBurger()
        this.isLoadingResults = false
        this.burgerName = ''
        this.router.navigate(['/gallery'])
      }), err => {
        console.log(err)
        this.isLoadingResults = false
        this.burgerName = ''
      }
  }

  displayRequiredError() {
    this.requiredError = true
    setTimeout(() => { this.requiredError = false }, 3000)
  }
}
