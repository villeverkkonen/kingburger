import { Injectable } from '@angular/core';

export interface Ingredient {
  title: string
  imageUrl: string
  price: number
  runningId?: number
}

@Injectable({
  providedIn: 'root'
})
export class IngredientsStoreService {

  constructor() { }
}
