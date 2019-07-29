import { Injectable } from '@angular/core';

export interface Ingredient {
  title: string
  imageUrl: string
  price: number
  id: number
  runningId?: number
  quantity?: number
}

@Injectable({
  providedIn: 'root'
})
export class IngredientsStoreService {

  constructor() { }
}
