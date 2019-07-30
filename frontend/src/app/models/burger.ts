import { Ingredient } from './ingredient'

export interface Burger {
  _id: string
  name: string
  ingredients: Ingredient[]
  votes: number
}