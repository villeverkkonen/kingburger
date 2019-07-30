import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor( private http: HttpClient ) { }

  getIngredients() {
    return this.http.get('/api/ingredients')
  }
}