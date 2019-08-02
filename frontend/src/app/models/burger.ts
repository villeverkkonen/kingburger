import { Ingredient } from './ingredient'

export interface Burger {
  id: string
  name: string
  ingredients: Ingredient[]
  votes: number
}